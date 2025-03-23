import type { PageLoad } from "./$types";
import { browser } from "$app/environment";

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
    // Verifică dacă codul rulează în browser
    if (!browser) return;

    const { id, slug } = params;

    try {
        const response = await fetch(`https://corsproxy.io/?url=https://eduboom.ro/video/${id}/${slug}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const htmlText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        const premiumM3U8 = "https://proxy1.eduboom.ro/eduboom/_definist_/smil:videos/%ID%/stream.smil/playlist.m3u8";
        
        const playerElement = doc.querySelector(".ucha-player");
        if (!playerElement) {
            return { status: 404, error: "Player element not found" };
        }

        let streaming_license = {};
        try {
            streaming_license = JSON.parse(playerElement.getAttribute('data-params') || '{}');
        } catch {
            return { status: 500, error: "Invalid streaming license data" };
        }

        const streaming_key = streaming_license.filename 
            ? premiumM3U8.replace("%ID%", streaming_license.filename) 
            : "";

        const titleElement = doc.querySelector("title");
        const h1Element = doc.querySelector("h1");
        const backlinkElement = doc.getElementById("videos-backlink");
        const descriptionElement = doc.querySelector("meta[name='description']");
        const imageElement = doc.querySelector("meta[itemprop='image']");
        const headerElement = doc.getElementById("header");
        const playlistElement = doc.querySelector(".side-nav-wrap");

        return {
            id: id,
            title: titleElement?.textContent?.trim() || "No Title",
            video_data: {
                title: h1Element?.textContent?.trim() || "No Title",
                category: backlinkElement?.textContent?.trim() || "No Category",
                keywords: Array.from(doc.querySelectorAll("span[itemprop='keywords']"))
                    .map(item => item.textContent.trim())
                    .slice(0, 4)
            },
            backlink: backlinkElement?.getAttribute("href")?.replace("https://eduboom.ro/", "/") || "#",
            description: descriptionElement?.getAttribute("content") || "No Description",
            image: imageElement?.getAttribute("content") || "No Image",
            streaming_key: streaming_key,
            streaming_license_id: streaming_license.filename || "",
            color: headerElement?.className?.replace("-2", "") || "default-color",
            streaming_license: streaming_license?.sources?.main?.smil?.split("?")[0] || "",
            playlist: playlistElement?.innerHTML?.replace(/https:\/\/eduboom\.ro\//g, "/") || "No Playlist"
        };
    } catch (error) {
        return {
            status: 500,
            category: "",
            error: "Failed to load page data"
        };
    }
};