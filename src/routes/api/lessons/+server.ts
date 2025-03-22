import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import cloudscraper from 'cloudscraper';

export const GET: RequestHandler = async ({ url }) => {
    const searchTerm = url.searchParams.get('q');

    try {
        const jsonEduboom = await cloudscraper.get(`https://justcors.com/tl_c014bfb/https://eduboom.ro/ajax/lessons-search?term=${searchTerm}`);

        const data = JSON.parse(jsonEduboom);

        let returnData = data.map((r: any) => ({
            ...r,
            url: r.url.replace('https://eduboom.ro', '')
        }));

        if (data[0]?.url === '') {
            returnData = [];
        }

        return json(returnData, {
            headers: {
                'Cache-Control': 'public, max-age=691200'
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return json({ error: 'Failed to fetch data' }, { status: 500 });
    }
};