// when i click on the search button 
const searchForm = document.getElementById('search-form');
const inputSearch = document.getElementById('input-search');

const apiKey = '3cac805e6362cc29d52eeef14b2bcc3a';

function getWeatherData(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(function (response){
        return response.json();
    })
    .then(function(currentWeather){
    
        console.log(currentWeather);

    })

}

searchForm.addEventListener('submit', function(event){
    event.preventDefault();
 // get user input
    const userInput = inputSearch.value;

// send req to weatherdashboard api, 

// fetch weather data based on city name

getWeatherData(userInput)


});
  

 





// once we got the data, 
// ppopulate the data into the dom

// store the city name into localstorage
// render the history in the search list

