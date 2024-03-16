const temp = document.querySelector('#temperature');
const humid = document.querySelector('#humid')
const wind = document.querySelector('#windSpeed')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')
const eventSection = document.querySelector('#weather-card')
const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


//32.1632756377172, -91.72025644128209
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.16&units=imperial&lon=-91.72&appid=6b753c5b3f206d70be293add3e8903f6';
const directionURL = 'https://anderson-robertp.github.io/wdd230/chamber/data/directions.json'
const threeURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.16&lon=-91.72&units=imperial&cnt=32&appid=6b753c5b3f206d70be293add3e8903f6'

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            displayResults(data);
            return data
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
    
}

function displayResults(data) {
    temp.textContent = `${data.main.temp.toFixed(0)}`;
    humid.textContent = `${data.main.humidity}`;
    //wind.innerHTML = `${data.wind.speed}`;
    windData = data.wind;
    windDisplay(windData);
    const events = data.weather;
    //console.table(events);
    events.forEach(event => {
        const icon = event.icon;
        //console.log(icon)
        const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        let desc = event.description;
        fL = desc.charAt(0).toUpperCase();
        rest = desc.substring(1);
        weatherIcon.setAttribute('src',iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${fL}${rest}`;
    });
    
}

//wind function to calc and display wind speed and direction
function windDisplay(data) {
    direction = data.deg
    //if (direction )
    wind.textContent = `${data.speed}`;
    //console.log(data.speed)
}

//Function to display weather events
async function fetchThreeDay(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            //displayResults(data);
            displayThreeDay(data)
            //return data
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
}

function displayThreeDay(data) {
    //console.log(data);
    const threeTemp = data.list[0].main.temp.toFixed(0);
    const threeHumid = data.list[0].main.humidity;
    const threeWind = data.list[0].wind.speed;
    const threeDeg = data.list[0].wind.deg;
    const today = findDay(data.list[0]);
    const cDay = today;
    //console.log(`temp: ${threeTemp} + Humid:${threeHumid} + wind: ${threeWind} + deg: ${threeDeg}`);
    //console.log(`day: ${today} + ms:${cDay}`);
    // Display events
    //console.log(data.list)
    // Calc three day forecast
    var conData = {};
    for (let i = 0; i < data.list.length; i++) {
        const entry = data.list[i];
        //console.log(entry)
        const entryDay = findDay(entry);
        //console.log(entryDay);
        if (!conData[entryDay]) {
            conData[entryDay] = {
                low: entry.main.temp_min,
                high: entry.main.temp_max,
                desc: entry.weather[0].description,
                icon: entry.weather[0].icon,
                //
            }
        } else {
            if(entryDay.temp_min < conData[entryDay].low) {
                conData[entryDay].low = entryDay.temp_min
            }
            if (entryDay.temp_max > conData[entryDay].high){
                conData[entryDay].high = entryDay.temp_max
            }
        }
        
    }

    console.log(conData);

    let first = 1
    for (const indexDay in conData){
        if (first == 1 || first == 5) {
            first++;
            console.log(first)
            continue;
        } else {
            const tempHigh = conData[indexDay].high;
            const tempLow = conData[indexDay].low;
            const foreDesc = conData[indexDay].desc;
            const foreIcon = conData[indexDay].icon;
            
            console.log(`${first} + ${indexDay} + ${tempHigh} + ${tempLow} + ${foreDesc} + ${foreIcon}`)
        }
        first++

    }
    
    
}

function findDay(data) {
    var ms = data.dt*1000;
    const date = new Date(ms);
    const day = date.getDay()
    const nameday = daysOfWeek[day];
    //console.log(nameday);
    return nameday
}

apiFetch(url);
fetchThreeDay(threeURL);