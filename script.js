const apiKey = 'ebcc092d4723d3394933221bddcb02a8';

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput === '') {
        alert('Please enter a city.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    let weatherWidgetsHtml = '';

    if (description.includes('rain')) {
        weatherWidgetsHtml = `<p>It's raining! ☔️</p>`;
    } else if (description.includes('clear')) {
        weatherWidgetsHtml = `<p>It's sunny! ☀️</p>`;
    } else if (description.includes('fog')) {
        weatherWidgetsHtml = `<p>It's foggy! 🌁</p>`;
    }

    const resultHtml = `
        <h6>City: ${cityName}</h6>
        <p>Temperature: ${temperature} K</p>
        <p>Description: ${description}</p>
        <div class="weather-widgets">${weatherWidgetsHtml}</div>
    `;

    weatherResult.innerHTML = resultHtml;
}
