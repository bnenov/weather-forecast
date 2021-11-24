export const getCurrentWeatherData = async (locationData) => {
    console.log('Location', locationData.city);

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${locationData.city},${locationData.country}&appid=3ef3666eec611215185ab5da277e8d69&units=metric`;

    console.log(urlWeather);
    const response = await fetch(urlWeather);
    const result = await response.json();


    return result;
}