import { parse } from "node-html-parser";
import type { PageServerLoad } from "./$types";
import cloudscraper from "cloudscraper";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    const { category, slug } = params;

    const response = await cloudscraper.get(`https://eduboom.ro/lectii-pe-materii/${category}/${slug}`);
    const htmlText = response;


    const html = parse(htmlText);
    return {
        color: html.getElementById("header").classNames.replace("-2", ""),
        wrap: html.getElementById('wrap')?.innerHTML.replaceAll("https://eduboom.ro/", "/")
    }
};