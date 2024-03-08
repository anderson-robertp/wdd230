const URL = "https://anderson-robertp.github.io/wdd230/chamber/data/members.json"

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

getLinks(URL);

async function getLinks(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
}

function displayMembers(members) {
    members.chamberMembers.forEach(member => {
        var name = member.name;
        //console.log(name);
        var address = member.address;
        var phone = member.phone;
        var website = member.website;
        var logo = member.logo;
        var membership = member.membership;
        // Create h3 element
        var h3 = document.createElement('h3');
        // append name
        h3.textContent = name;
        // create p element for phone,address,website,membership and append
        // create img element
        // add attributes to img
        // create section element
        section = document.createElement('section')
        // append all items to section
        section.appendChild(h3);
        // append section to article
        display.appendChild(section);
    });
}

function showList() {
    display.classList.remove("grid");
    display.classList.add("list");
}

function showGrid() {
    display.classList.remove("list");
    display.classList.add("grid");
}