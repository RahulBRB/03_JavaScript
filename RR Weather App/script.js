function getWeather() {
    const apiKey = "api-key";
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    //Fetch the current weather data
    fetch(currentWeatherUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error in fetching the current weather data: ", error);
            alert("Error fetching current weather data. Please try again later.");
        })

    //Fetch the forecast data
    fetch(forecastUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error("Error in fetching the forecast data: ", error);
            alert("Error fetching forecast data. Please try again later.");
        })
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById("temp-div");
    const weatherInfoDiv = document.getElementById("weather-info");
    const weatherIcon = document.getElementById("weather-icon");
    const hourlyForecast = document.getElementById("hourly-forecast");

    //clear the previous data
    weatherInfoDiv.innerHTML = "";
    hourlyForecast.innerHTML = "";
    tempDivInfo.innerHTML = "";

    if (data.cod === "404") {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
        <p>${temperature}&#176;C</p>
        `;

        const weatherHtml = `
        <p>${cityName}</p>
        <p>${description}</p>
        `;


        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById("hourly-forecast");
    const next24hours = hourlyData.slice(0, 8);

    next24hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;


        const hourlyItemHtml = `
            <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly Weather Icon">
            <span>${temperature}&#176;C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    })
}

function showImage(){
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.style.display = "block";

}
