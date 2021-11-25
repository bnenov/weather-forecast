export const getCurrentWeatherData = async (locationData) => {
    console.log('Location', locationData.city);

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${locationData.city},${locationData.country}&appid=31dc61f6c5690f83676fb79b56e362b0&units=metric`;

    console.log(urlWeather);
    const response = await fetch(urlWeather);
    const result = await response.json();


    return result;
}