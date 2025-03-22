import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const searchTerm = url.searchParams.get('q');

    const response = await fetch(`https://justcors.com/tl_c014bfb/https://eduboom.ro/ajax/lessons-search?term=${searchTerm}`);
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