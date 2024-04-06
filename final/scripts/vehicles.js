const url = "https://anderson-robertp.github.io/wdd230/final/data/vehicles.json"

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const tablebutton = document.querySelector("#table");
const display = document.querySelector("article");

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);
tablebutton.addEventListener("click", showTable);

getVehicles(url).then(
    function(value){parseData(value)}
)

async function getVehicles(link) {
    const response = await fetch(link);
    const data = await response.json();
    //console.table(data);
    return data;
}

function parseData(array) {
    console.table(array);
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