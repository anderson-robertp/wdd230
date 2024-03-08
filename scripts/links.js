const baseURL = "https://anderson-robertp.github.io/wdd230/";

const linksURL = "https://anderson-robertp.github.io/wdd230/data/links.json"

async function getLinks(URL) {
    var response = await fetch(URL);
    console.array(response);
}