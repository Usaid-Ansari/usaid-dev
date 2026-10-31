
 
// 1. API KEY
const API_KEY = "YOUR_ACTUAL_API_KEY";

// 2. HTML ELEMENTS
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const message = document.getElementById("message");

const cityName = document.getElementById("city-name");
const date = document.getElementById("date");
const temperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const condition = document.getElementById("condition");

const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");


// 3. GET WEATHER DATA
async function getWeather(city) {

    try {

        message.textContent = "Loading weather...";
        searchBtn.disabled = true;

        // API URL
        const URL = `https://api.weatherapi.com/v1/current.json?key=dbc1ba41b7fb4a20abe132639263110&q=${(city)}&aqi=no`;

        // Fetch API
        const response = await fetch(URL);

        // Convert response into JSON
        const data = await response.json();

        console.log(data);

        // Check API response
        if (!response.ok) {
            throw new Error(
                data.error?.message || "Something went wrong!"
            );
        }

        // Display weather
        displayWeather(data);

        message.textContent = "";

    } 
    catch (error) {

        message.textContent = error.message;

        console.log("Weather Error:", error);

    } 
    finally {

        searchBtn.disabled = false;

    }
}


// 4. DISPLAY WEATHER DATA
function displayWeather(data) {

    // Location details
    cityName.textContent =
        `${data.location.name}, ${data.location.country}`;

    date.textContent =
        `Local time: ${data.location.localtime}`;

    // Temperature
    temperature.textContent =
        Math.round(data.current.temp_c);

    // Weather condition
    condition.textContent =
        data.current.condition.text;

    // Weather icon
    weatherIcon.src =
        "https:" + data.current.condition.icon;

    weatherIcon.alt =
        data.current.condition.text;

    // Feels like
    feelsLike.textContent =
        `${Math.round(data.current.feelslike_c)}°C`;

    // Humidity
    humidity.textContent =
        `${data.current.humidity}%`;

    // Wind speed
    wind.textContent =
        `${data.current.wind_kph} km/h`;
}


// 5. FORM SUBMIT EVENT
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    // Check empty input
    if (city === "") {

        message.textContent = "Please enter a city name!";

        return;
    }

    // Call weather function
    getWeather(city);

});
