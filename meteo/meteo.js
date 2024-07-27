document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8688544598a94e46832192606241907'; // Replace with your WeatherAPI key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=valencia-spain&aqi=no`;

    const result = document.getElementById('result');

    let getWeather = () => {
        fetch(apiUrl)
            .then((resp) => resp.json())
            .then(data => {
                console.log(data);
                const { location, current } = data;
                const iconUrl = `https:${current.condition.icon}`; // Add `https:` to the icon URL
                
                result.innerHTML = `
                    <img src="${iconUrl}" alt="${current.condition.text}">
                    <h2>${location.name}, ${location.country}</h2>
                    <p><strong>Temperature:</strong> ${current.temp_c}ºC</p>
                    <p><strong>Condition:</strong> ${current.condition.text}</p>
                    <p><strong>Humidity:</strong> ${current.humidity}%</p>
                    <p><strong>Precipitation:</strong> ${current.precip_mm} mm</p>
                    <p><strong>Vitesse:</strong> ${current.vis_km} km/h</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                result.innerHTML = `<p>Failed to load weather data.</p>`;
            });
    };

    window.addEventListener('load', getWeather);
});
