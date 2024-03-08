const linksURL = "https://anderson-robertp.github.io/wdd230/data/links.json"

getLinks(linksURL);

async function getLinks(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    //console.table(data.lessons);
    displayLinks(data.lessons);
}