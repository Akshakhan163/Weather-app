const btn = document.querySelector("#searchBtn");
const input = document.querySelector("#search");

const temp = document.querySelector(".tempNum h1");
const cityElement = document.querySelector(".city h2");
const humidity = document.querySelector("#humidity h2");
const wind = document.querySelector(".windSpeed h2");

async function getWeather(city) {
 try {
    const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    const response = await fetch(URL);
    const data = await response.json();

    if(!data.results || data.results.length === 0) {
        alert("City not found");
        return;
    }

    const location = data.results[0];
    const latitude = location.latitude;
    const longitude = location.longitude;

    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();
    
    temp.textContent = `${Math.round(weatherData.current.temperature_2m)}°C`;
    cityElement.textContent = location.name;
    humidity.textContent = `${weatherData.current.relative_humidity_2m}%`;
    wind.textContent = `${weatherData.current.wind_speed_10m}km/h`;
 }
  catch(error) {
    console.log(error);
    alert("something went wrong!");
  }
}
btn.addEventListener("click", () => {
    const cityName = input.value.trim();
    if(cityName === "") {
        alert("Please enter a city");
        return;
    }
    getWeather(cityName);
});
input.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        btn.click();
    }
});