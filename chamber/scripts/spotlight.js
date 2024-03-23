const URL = "https://anderson-robertp.github.io/wdd230/chamber/data/members.json"

const display = document.querySelector("#member-spot");

getLinks(URL).then(
    function(value) {displayMembers(value)},
    function(error) {displayMembers(error)}
);

async function getLinks(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    //console.table(data.members.chamberMembers);
    //displayMembers(data.members.chamberMembers);
    return data.members.chamberMembers;
}

function displayMembers(data) {
    // make array of gold and non profit members
    let goldNP = data.filter(function(member){
        //console.log(member)
        if (member.membership == 'Gold'){
            return member
        } else {
            if (member.membership == 'Silver') {
                return member
            }
        }
    });
    //console.table(goldNP)
    // Pick a random to spotlight
    let randSpot = goldNP.filter(function(member){
        let rand1 = Math.floor(Math.random()*goldNP.length())
        let rand2 = rand1;
        while (rand2 == rand1) {
            rand2 = Math.floor(Math.random()*goldNP.length())
        }
        let rand3 = rand2
        while (rand3 == rand2 || rand3 == rand1){
            rand3 = Math.floor(Math.random()*goldNP.length())
        }
        console.log(`1:${rand1} 2:${rand2} 3:${rand3}`)
    });
    goldNP.forEach(member => {
        //make h4 element
        const h4 = document.createElement('h4');
        h4.textContent = member.name
        // create p element for phone,address,website,membership and append
        var pAddress = document.createElement('p');
        var pPhone = document.createElement('p');
        //var pLevel = document.createElement('p');
        pAddress.textContent = member.address;
        pPhone.textContent = member.phone;
        //pLevel.textContent = `Membership: ${member.membership}`
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
        section.appendChild(imgLogo);
        section.appendChild(h4);
        section.appendChild(pAddress);
        section.appendChild(pPhone);
        section.appendChild(aWeb);
        display.appendChild(section);
    }); 
}

/*function findGoldMembers(member,index,array){
    console.log(member)
    if (member.membership == 'Gold'){
        return member
    } else {
        if (member.membership == 'Non Profit') {
            return member
        }
    }
}*/