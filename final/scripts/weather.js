// 20.496492631914442, -86.94321812736854
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.49&lon=-86.94&units=imperial&cnt=32&appid=6b753c5b3f206d70be293add3e8903f6'
const weather = document.querySelector('#current');
const forecast = document.querySelector('#forecast')
const banner = document.querySelector(".banner-content");
const button = document.querySelector(".banner_close");

button.addEventListener("click", function() {
    this.closest(".banner").style.display = "none"
});

apiFetch(url).then(
    function(value){displayWeather(value)}
    
)


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
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

function displayWeather(data) {
    //console.table(data)
    let today = data.list[0]
    //console.table(today)
    weatherBanner(today);
    displayCurrentConditions(today,weather);
    displayConditions(today.weather,weather);
    displayForecast(data.list,forecast);
    
}
function displayCurrentConditions(today,weather){
    //console.table(today)
    let temp = today.main.temp;  // Current temp
    let humid = today.main.humidity;    // Current humidity
    let feels = today.main.feels_like;
    const pTemp = document.createElement('p');
    const pHumid = document.createElement('p');
    const pFeels = document.createElement('p');
    pTemp.innerHTML = `<strong>Temperature<br>${temp}</strong><br>`
    pHumid.innerHTML = `Humidity<br>${humid}<br>`
    pFeels.innerHTML = `Feels Like<br>${feels}`
    //console.log(weather)
    weather.appendChild(pTemp);
    weather.appendChild(pHumid);
    weather.appendChild(pFeels);
}

function displayConditions(data,div){
    // title, icon, desc
    //console.table(data);
    data.forEach(element => {
       const title = element.main;
       const icon = element.icon;
       const desc = element.description;
       //console.log(`title:${title} icon:${icon} desc:${desc}`)
       const section = document.createElement('section')
       const h4 = document.createElement('h4');
       const fig = document.createElement('figure')
       const caption = document.createElement('figcaption');
       var weatherIcon = document.createElement("img");
       const iconsrc = `https://openweathermap.org/img/wn/${icon}.png`;
       weatherIcon.setAttribute('src',iconsrc);
       weatherIcon.setAttribute('alt', desc);
       caption.textContent = desc;
       fig.appendChild(weatherIcon);
       fig.appendChild(caption)
       h4.textContent = title;
       section.appendChild(h4);
       section.appendChild(fig)
       //console.log(div)
       div.appendChild(section);
    });
}


// Next days forecast
function displayForecast(data,weather) {
    //console.table(data);
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowDateString = tomorrowDate.toISOString().split('T')[0];
    //console.log(tomorrowDateString)
    const forecastData = data.filter(function(value){
        if(value.dt_txt.startsWith(tomorrowDateString)){
            if(value.dt_txt.endsWith('15:00:00')){
                return value;
            }
        }
    });
    //console.table(forecastData[0]);
    displayCurrentConditions(forecastData[0],forecast)
    displayConditions(forecastData[0].weather,forecast);
}

// banner for high temps
function weatherBanner(data) {
    let temp_max = data.main.temp_max;
    //console.log(temp_max);
    const pMax = document.createElement('p');
    pMax.textContent = `Todays High is ${temp_max}`;
    banner.appendChild(pMax);
}
