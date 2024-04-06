const url = "https://anderson-robertp.github.io/wdd230/final/data/vehicles.json"

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const tablebutton = document.querySelector("#table");
const display = document.querySelector("article");
const table = document.querySelector('#dataTable tbody')

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
}

function populateTable(array) {
    console.table(array);
}

function createCards(array) {
    const make = array.make;
    const model = array.model;
    const specs = array.specs;
    const capacity = array.capacity;
    const resHalf = array.reserve.'Half Day(3hrs)'
    const resFull
    const walkHalf
    const walkFull
}

function showList() {
    display.classList.remove("grid");
    display.classList.remove("table");
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