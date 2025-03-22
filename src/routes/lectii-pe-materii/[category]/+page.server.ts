import { parse } from "node-html-parser";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
    const { category } = params;

    const response = await fetch(`https://eduboom.ro/lectii-pe-materii/${category}`);
    const htmlText = await response.text();


    const html = parse(htmlText);
    return {
        color: html.getElementById("header").classNames.replace("-2", ""),
        wrap: html.getElementById('wrap')?.innerHTML.replaceAll("https://eduboom.ro/", "/")
    }
};