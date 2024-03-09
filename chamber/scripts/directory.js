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
        // Create h3 element
        var h3 = document.createElement('h3');
        // append name
        h3.textContent = member.name;
        // create p element for phone,address,website,membership and append
        var pAddress = document.createElement('p');
        var pPhone = document.createElement('p');
        var pLevel = document.createElement('p');
        pAddress.textContent = member.address;
        pPhone.textContent = member.phone;
        pLevel.textContent = `Membership: ${member.membership}`
        // create a element
        var aWeb = document.createElement('a');
        // add attribtes
        aWeb.href = member.website;
        aWeb.textContent = member.website;
        // create img element
        var imgLogo = document.createElement('img');
        // add attributes to img
        imgLogo.setAttribute('src',member.logo)
        imgLogo.setAttribute('alt',`logo of ${member.name}`)
        imgLogo.setAttribute('loading','lazy')
        // create section element
        section = document.createElement('section')
        // append all items to section
        section.appendChild(h3);
        section.appendChild(pAddress);
        section.appendChild(pPhone);
        section.appendChild(aWeb);
        section.appendChild(imgLogo);
        section.appendChild(pLevel);
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