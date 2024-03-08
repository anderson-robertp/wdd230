const baseURL = "https://anderson-robertp.github.io/wdd230/";

const linksURL = "https://anderson-robertp.github.io/wdd230/data/links.json"

getLinks(linksURL);

async function getLinks(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    //console.table(data.lessons);
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    var card = document.getElementById("urls");
    //var ul = card.ul;
    //console.log("top:" + card)
    //console.log(ul)
    weeks.forEach(week => {
        var lesson = week.lesson;
        var links = week.links
        //console.log(lesson);
        //console.table(links);
        // Create li
        var li = document.createElement('li');
        //append lesson
        li.textContent = `${lesson}: `;
        //console.log(li);
        links.forEach(link => {
            var url = link.url;
            var title = link.title;
            //console.log("url: " + url + ", title: " + title);
            // create a
            var a = document.createElement('a');
            // sett attribute href to url
            a.href = url;
            // set title to text
            a.textContent = `| ${title} `;
            //append to li
            li.appendChild(a);
        });
        //console.log(card);
        card.appendChild(li);
    });
}