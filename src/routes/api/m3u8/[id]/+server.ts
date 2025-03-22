import { text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const { id } = params;

    try {
        const basem3u8 = `https://proxy1.eduboom.ro/eduboom/_definist_/smil:videos/${id}/stream.smil/`;
        const data = `${basem3u8}playlist.m3u8`;

        const m3u8Response = await fetch(data);
        if (!m3u8Response.ok) {
            throw new Error(`Failed to fetch playlist.m3u8: ${m3u8Response.statusText}`);
        }
        const m3u8 = await m3u8Response.text();

        const playlists = parseM3U8(m3u8);
        if (playlists.length < 3) {
            throw new Error('Not enough playlists found in the m3u8 file');
        }

        const MQ_ = basem3u8 + playlists[2].url;
        const MQ_RESPONSE = await fetch(MQ_);
        if (!MQ_RESPONSE.ok) {
            throw new Error(`Failed to fetch MQ playlist: ${MQ_RESPONSE.statusText}`);
        }
        let MQ_DATA = await MQ_RESPONSE.text();

        MQ_DATA = MQ_DATA.replace("//eduboom.ro/streaming/key/", "/assets/base/streaming/key/eduboom");
        MQ_DATA = MQ_DATA.replaceAll("media_", `https://justcors.com/l_naqufodjfw/${basem3u8}`);

        return text(MQ_DATA);
    } catch (error) {
        return new Response(`Error: ${error.message}`, { status: 500 });
    }
};

function parseM3U8(m3u8Content: string): Array<{ [key: string]: string }> {
    const lines = m3u8Content.split('\n');
    const playlists: Array<{ [key: string]: string }> = [];
    let currentPlaylist: { [key: string]: string } | null = null;

    for (const line of lines) {
        if (line.startsWith('#EXT-X-STREAM-INF:')) {
            currentPlaylist = {};
            const attributes = line.split(':')[1].split(',');
            for (const attribute of attributes) {
                const [key, value] = attribute.split('=');
                if (key && value) {
                    currentPlaylist[key] = value.replace(/"/g, '');
                }
            }
        } else if (line.trim() !== '' && currentPlaylist) {
            currentPlaylist.url = line.trim();
            playlists.push(currentPlaylist);
            currentPlaylist = null;
        }
    }

    return playlists;
}