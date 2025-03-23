import { parse } from "node-html-parser";
import type { PageLoad } from "./$types";

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ params, fetch }) => {
    const { category } = params;

    try {
        const response = await fetch(`https://corsproxy.io/?url=https://eduboom.ro/lectii-pe-materii/${category}`);
      
        const htmlText = await response.text();

        const html = parse(htmlText);
        const wrap = html.getElementById('wrap');

        return {
            color: html?.getElementById("header")?.classNames.replace("-2", ""),
            wrap: wrap?.innerHTML.replaceAll("https://eduboom.ro/", "/") || "<p>Content not found</p>"
        };
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return {
            color: "default-color",
            wrap: "<h4>" + error + "</h4>"
        };
    }
};