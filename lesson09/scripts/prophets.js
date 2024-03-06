const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData (url) {
    var response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        var card = document.createElement("section")
        var fullName = document.createElement("h2");
        var birthDate = document.createElement("p");
        var birthPlace = document.createElement("p");
        var portrait = document.createElement("img");
        //Set Name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `${prophet.birthdate}`;
        birthPlace.textContent = `${prophet.birthplace}`;
        //Set Image Attributes
        portrait.setAttribute('src',prophet.imageurl)
        portrait.setAttribute('alt',`Portrait of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading','lazy')
        portrait.setAttribute('width','340')
        portrait.setAttribute('hieght','440')

        //Append to section
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        //append to div
        cards.appendChild(card);
    });
}

getProphetData(url);