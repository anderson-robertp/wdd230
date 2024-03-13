const temp = document.querySelector('#temp');
const humid = document.querySelector('#humid')
//const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption')
const eventSection = document.querySelector('#weather-card')

//32.50923661523413, -92.11902579766381
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.5&units=imperial&lon=-92.11&appid=6b753c5b3f206d70be293add3e8903f6';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
    
}

function displayResults(data) {
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    humid.innerHTML = `${data.main.humidity}&#37;`;
    const events = data.weather;
    console.table(events);
    events.forEach(event => {
        const fig = document.createElement('figure');
        const captionDesc = document.createElement('figcaption')
        var weatherIcon = document.createElement("img");
        const icon = event.icon;
        //console.log(icon)
        const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        let desc = event.description;
        fL = desc.charAt(0).toUpperCase();
        rest = desc.substring(1);
        weatherIcon.setAttribute('src',iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${fL}${rest}`;
        fig.appendChild(weatherIcon)
        fig.appendChild(captionDesc)
        eventSection.appendChild(fig)
    });
    
}

apiFetch(url);