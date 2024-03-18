const list = document.querySelector('#list-map');
const map = document.querySelector('#result-map-list');
const cMapList = document.querySelector('#list-map-c');
const cMapResult = document.querySelector('#result-map-c');
const filterList = document.querySelector('#filter-list');
const filterResultList = document.querySelector('#filter-result-list');
const cFilterList = document.querySelector('#c-filter-list');
const cFilterResultList = document.querySelector('#c-filter-result-list');
const reduceList = document.querySelector('#reduce-list');
const reduceResult = document.querySelector('#reduce-result-list');
const cReduceList = document.querySelector('#c-reduce-list');
const cReduceResult = document.querySelector('#c-reduce-result-list');

// Declare an Array
const ships = ['Enterprise','Galactica','Serenity','Millennium Falcon','Rocinante','Outlaw Star','Discovery','Heart of Gold','Nostromo'];
const cShips = [
    {id:1,name:'Enterprise',franchise:'Star Trek'},
    {id:2,name:'Voyager',franchise:'Star Trek'},
    {id:3,name:'Defiant',franchise:'Star Trek'},
    {id:4,name:'Discovery',franchise:'Star Trek'},
    {id:5,name:'Millennium Falcon',franchise:'Star Wars'},
    {id:6,name:'Home One',franchise:'Star Wars'},
    {id:7,name:'Executer' ,franchise:'Star Wars'},
    {id:8,name:'Galactica',franchise:'Battlestar Galactica'},
    {id:9,name:'Serenity',franchise:'Firefly'},
    {id:10,name:'Rocinante',franchise:'The Expanse'},
    {id:11,name:'Outlaw Star',franchise:'Outlaw Star'},
    {id:12,name:'Heart of Gold',franchise:'Hicthhikers Guide to the Galaxy'},
    {id:13,name:'Nostromo',franchise:'Alien'}
]

// Map
let mapResultShips = ships.map(function(ship) {
    return ship.toUpperCase();
})

// Map a little more complicated
let cMapResultShips = cShips.map(function(ship) {
    if (ship.franchise == 'Star Wars'){
        return ship.name.toUpperCase();
    } else {
        return ship.name
    }
});


// Filter
let filterShips = ships.filter(function(ship){
    return ship.length < 10;
})

// Filter a little more complicated
let cFilterShips = cShips.filter(function(ship){
    if (ship.franchise == "Star Trek")
    return ship;
});

// Reduce

const numbers = [4,8,15,16,23,42]

let sum = numbers.reduce(function(total,current){
    return total+current;
},0);



// Display for website
ships.forEach(ship => {
    const li = document.createElement('li');
    li.textContent = ship;
    list.appendChild(li);
});

mapResultShips.forEach(rShip => {
    const li = document.createElement('li');
    li.textContent = rShip;
    map.appendChild(li);
});

cShips.forEach(ship => {
    const li = document.createElement('li');
    li.textContent=`${ship.name} from ${ship.franchise}`
    cMapList.appendChild(li)
});

cMapResultShips.forEach(ship => {
    const li = document.createElement('li');
    li.textContent=ship
    cMapResult.appendChild(li)
});

ships.forEach(ship =>{
    const li = document.createElement('li');
    li.textContent = ship;
    filterList.appendChild(li);
});

filterShips.forEach(ship => {
    const li = document.createElement('li');
    li.textContent = ship;
    filterResultList.appendChild(li);
})
cShips.forEach(ship => {
    const li = document.createElement('li');
    li.textContent=`${ship.name} from ${ship.franchise}`
    cFilterList.appendChild(li)
});
cFilterShips.forEach(ship => {
    const li = document.createElement('li');
    li.textContent=`${ship.name} from ${ship.franchise}`
    cFilterResultList.appendChild(li)
})
numbers.forEach(num => {
    const li = document.createElement('li');
    li.textContent=num.toString();
    reduceList.appendChild(li);
})
const sumLi = document.createElement('li');
sumLi.textContent=sum.toString();
reduceResult.appendChild(sumLi);