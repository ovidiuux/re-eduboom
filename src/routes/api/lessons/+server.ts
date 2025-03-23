import { json, text } from '@sveltejs/kit';

export const GET = async ({ url }) => {
    const searchTerm = url.searchParams.get('q');

    try {
        const jsonEduboom = await (await fetch(
            `https://corsproxy.io/?url=https://eduboom.ro/ajax/lessons-search?term=${searchTerm}`
        )).json();

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

    } catch (error) {
        return json({"error": error})
        console.log(error);
    }
};