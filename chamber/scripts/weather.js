const temp = document.querySelector('#temperature');
const humid = document.querySelector('#humid')
const wind = document.querySelector('#windSpeed')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')
const eventSection = document.querySelector('#weather-card')


//32.1632756377172, -91.72025644128209
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.16&units=imperial&lon=-91.72&appid=6b753c5b3f206d70be293add3e8903f6';
const directionURL = 'https://anderson-robertp.github.io/wdd230/chamber/data/directions.json'
const threeURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.16&lon=-91.72&units=imperial&appid=6b753c5b3f206d70be293add3e8903f6'

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
            console.log(data)
            //displayResults(data);
            return data
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
}

function diplayThreeDay(data) {
    
}


apiFetch(url);
fetchThreeDay(threeURL);