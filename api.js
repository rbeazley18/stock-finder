
const div = document.getElementById("show-weather")


async function getWeather() {
    const searchValue = document.getElementById("search-bar").value;
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=3142f22e0a38821d9956f08e8cd78672&units=imperial
        `, { mode: 'cors' });
        const weatherData = await response.json();
        console.log(weatherData)
        errorMsg.textContent = "";
        div.innerText = weatherData.weather[0].description;
    } catch (error) {
        console.log(error);
        errorMsg.textContent = "No weather found.";
    }
}
