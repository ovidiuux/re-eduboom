import { parse } from "node-html-parser";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const { id, slug } = params;

    try {
        const response = await fetch(`https://corsproxy.io/?url=https://eduboom.ro/video/${id}/${slug}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const htmlText = await response.text();

        const html = parse(htmlText);
        const premiumM3U8 = "https://proxy1.eduboom.ro/eduboom/_definist_/smil:videos/%ID%/stream.smil/playlist.m3u8";

        const playerElement = html.querySelector(".ucha-player");
        if (!playerElement) {
            throw new Error("Player element not found");
        }

        const streaming_license = JSON.parse(playerElement.attributes['data-params']);
        const streaming_key = premiumM3U8.replace("%ID%", streaming_license.filename);

        const titleElement = html.getElementsByTagName("title")[0];
        const h1Element = html.getElementsByTagName("h1")[0];
        const backlinkElement = html.getElementById("videos-backlink");
        const descriptionElement = html.querySelector("meta[name='description']");
        const imageElement = html.querySelector("meta[itemprop='image']");
        const headerElement = html.getElementById("header");
        const playlistElement = html.querySelector(".side-nav-wrap");

        return {
            id: id,
            title: titleElement?.childNodes[0]?.rawText || "No Title",
            video_data: {
                title: h1Element?.textContent.replace(/^\s+|\s+$/g, '') || "No Title",
                category: backlinkElement?.childNodes[2]?.rawText || "No Category",
                keywords: html.querySelectorAll("span[itemprop='keywords']").map(item => item.innerText.replace(/^\s+|\s+$/g, '')).slice(0, 4)
            },
            backlink: backlinkElement?.attributes.href.replaceAll("https://eduboom.ro/", "/") || "#",
            description: descriptionElement?.attributes.content || "No Description",
            image: imageElement?.attributes.content || "No Image",
            streaming_key: streaming_key,
            streaming_license_id: streaming_license.filename,
            color: headerElement?.classNames.replace("-2", "") || "default-color",
            streaming_license: streaming_license.sources.main.smil.split("?")[0],
            playlist: playlistElement?.innerHTML.replaceAll("https://eduboom.ro/", "/") || "No Playlist"
        };
    } catch (error) {
        return {
            status: 500,
            error: "Failed to load page data"
        };
    }
};