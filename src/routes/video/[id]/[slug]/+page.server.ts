import { parse } from "node-html-parser";
import type { PageServerLoad } from "./$types";
import cloudscraper from "cloudscraper";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    const { id, slug } = params;

    const response = await cloudscraper.get(`https://eduboom.ro/video/${id}/${slug}`);
    const htmlText = response


    const html = parse(htmlText);
    const premiumM3U8 = "https://proxy1.eduboom.ro/eduboom/_definist_/smil:videos/%ID%/stream.smil/playlist.m3u8"

    const streaming_license = JSON.parse(html.querySelector(".ucha-player").attributes['data-params']);
    const streaming_key = premiumM3U8.replace("%ID%", streaming_license.filename);

    return {
        id: id,
        title: html.getElementsByTagName("title")[0].childNodes[0].rawText,
        video_data: {
            title: html.getElementsByTagName("h1")[0].textContent.replace(/^\s+|\s+$/g, ''),
            category: html.getElementById("videos-backlink").childNodes[2].rawText,
            keywords: html.querySelectorAll("span[itemprop='keywords']").map(item => item.innerText.replace(/^\s+|\s+$/g, '')).slice(0, 4)

        },
        description: html.querySelector("meta[name='description']").attributes.content,
        image: html.querySelector("meta[itemprop='image']").attributes.content,
        streaming_key: streaming_key,
        streaming_license_id: streaming_license.filename,
        color: html.getElementById("header").classNames.replace("-2", ""),
        streaming_license: streaming_license.sources.main.smil.split("?")[0],
        playlist: html.querySelector(".side-nav-wrap")?.innerHTML.replaceAll("https://eduboom.ro/", "/")
    }
};