// when i click on the search button 
const searchForm = document.getElementById('search-form');
const inputSearch = document.getElementById('input-search');
const currentDayCity = document.getElementById('current-day-city')
const currentDayTemp = document.getElementById('current-day-temp')
const currentDayWind = document.getElementById('current-day-wind')
const currentDayHumidity = document.getElementById('current-day-humidity')

const apiKey = '3cac805e6362cc29d52eeef14b2bcc3a';

function getOneCallApi (lon, lat){

    return fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid={apiKey}`)
        .then(function(result){
            return result.json()
        })
       
}

function getWeatherData(city) {

    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(function (result){
        return result.json();
    })
    .then(function(currentWeather){
    
        console.log(currentWeather);

        return getOneCallApi(currentWeather.coord.lon, currentWeather.coord.lat, currentWeather.dt)
    })
    const weatherPromise = result.json()
    return weatherPromise

    .then(function (weatherPromise) {
        const weatherIcon = $("<img>")

        const temp = weatherPromise.main.temp
        const conditions = weatherPromise.weather[0].main
    }

}

searchForm.addEventListener('submit', function(event){
    event.preventDefault();
 // get user input
    const userInput = inputSearch.value;

    // send req to weatherdashboard api, 

    // fetch weather data based on city name

    getWeatherData(userInput)

        .then(function(weatherData){
    
        console.log(weatherData);

        // once we got the data, 
        // populate the data into the dom

        // current
        const datetime = moment(weatherData.current.dt, 'X').format("YYYY-MM-DD");
        console.log(datetime);

        currentDayCity.innerHTML = `${userInput} ${datetime} icon`
        currentDayHumidity.textContent = weatherData.current.humidity;
        currentDayTemp.textContent = weatherData.current.temp + 'K';
        currentDayWind.textContent = weatherData.current.wind_speed + "kmh";
    })

});

localStorage.setItem('city', 'userInput');


// store the city name into localstorage

// render the history in the search list

