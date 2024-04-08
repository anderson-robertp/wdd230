const url = "https://anderson-robertp.github.io/wdd230/final/data/vehicles.json"

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const tablebutton = document.querySelector("#table");
const display = document.querySelector("article");
//const table = document.querySelector('#dataTable tbody')

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);
tablebutton.addEventListener("click", showTable);

getVehicles(url).then(data => {
    parseData(data);
    populateTable(data);
})

async function getVehicles(link) {
    const response = await fetch(link);
    const data = await response.json();
    //console.table(data);
    return data;
}

function parseData(array) {
    console.table(array);
    const scooters = array.vehicles.scooters
    const atvs = array.vehicles.atvs
    const jeeps = array.vehicles.jeeps
    console.table(scooters);
    createCards(scooters);
    createCards(atvs);
    createCards(jeeps);
}

function populateTable(array) {
    const table = document.querySelector('#datatable tbody')
    console.table(array);
    const scooters = array.vehicles.scooters
    const atvs = array.vehicles.atvs
    const jeeps = array.vehicles.jeeps
    const rowScoot = document.createElement('tr');
    rowScoot.innerHTML = `
        <td>Scooters</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;
    table.appendChild(rowScoot);
    tableRow(scooters,table);
    const rowATV = document.createElement('tr');
    rowATV.innerHTML = `
        <td>ATVs</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;
    table.appendChild(rowATV);
    tableRow(atvs,table);
    const rowJeep = document.createElement('tr');
    rowJeep.innerHTML = `
        <td>Jeeps</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;
    table.appendChild(rowJeep);
    tableRow(jeeps,table);
    
}

function createCards(array) {
    array.forEach(element => {
        const make = element.make;
        const model = element.model;
        const specs = element.specs;
        const capacity = element.capacity;
        const pic = element.pic;
        console.log(`${make} `)
        // create section
        const section = document.createElement('section');
        // create pic and img element
        const picElm = document.createElement('picture')
        const img = document.createElement('img')
        // set img attributes
        img.setAttribute('src',pic)
        img.setAttribute('alt',`logo of ${make} ${model} ${specs}`)
        img.setAttribute('loading','lazy')
        // append img to pic
        picElm.appendChild(img);
        // Create H3
        const h3 = document.createElement('h3')
        h3.textContent = `${make} ${model} ${specs}`
        // Text content for h3 will be make and model
        // Create p element
        const p = document.createElement('p');
        // Text for p will be specs and capacity
        p.textContent = `Capacity ${capacity}`
        // append all items to section
        section.appendChild(picElm)
        section.appendChild(h3)
        section.appendChild(p)
        // append section to article
        display.appendChild(section)
    });
}

function tableRow(array,table){
    //const table = document.querySelector('#datatable tbody')
    array.forEach(element => {
        const make = element.make;
        const model = element.model;
        const resHalf = element.reserve[0].resHalf;
        const resFull = element.reserve[1].resFull;
        const walkHalf = element.walkin[0].walkHalf;
        const walkFull = element.walkin[1].walkFull;
        console.log(`${make} ${model} ${resHalf} ${resFull} ${walkHalf} ${walkFull}`)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td></td>
            <td>${make}</td>
            <td>${model}</td>
            <td>${resHalf}</td>
            <td>${resFull}</td>
            <td>${walkHalf}</td>
            <td>${walkFull}</td>
        `;
        table.appendChild(row);
    })
}

function showList() {
    display.classList.remove("grid");
    display.classList.add("list");
}

function showGrid() {
    display.classList.remove("list");
    display.classList.remove("table");
    display.classList.add("grid");
}

function showTable() {
    display.classList.remove("list");
    display.classList.remove("grid");
    display.classList.add("table");
}