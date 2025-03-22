import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const searchTerm = url.searchParams.get('q');

    const response = await fetch("https://justcors.com/tl_c014bfb/https://eduboom.ro/ajax/lessons-search?term=doar", {
        "headers": {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "ro,en-GB;q=0.9,en;q=0.8,en-US;q=0.7",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        },
        "referrer": "https://eduboom.ro/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      });

    const jsonEduboom = await response.json();

    let returnData = jsonEduboom.map((r: any) => ({
        ...r,
        url: r.url.replace('https://eduboom.ro', '')
    }));

    if (jsonEduboom[0]?.url === '') {
        returnData = [];
    }

    return json(returnData, {
        headers: {
            'Cache-Control': 'public, max-age=691200'
        }
    });
};