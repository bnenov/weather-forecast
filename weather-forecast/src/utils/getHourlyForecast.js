export const getHourlyForecast = async (locationData) => {
    console.log('Inside getHourlyFrecast', locationData);

    const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${locationData.city},${locationData.country}&appid=3ef3666eec611215185ab5da277e8d69&units=metric`;

    console.log(urlWeather);
    const response = await fetch(urlWeather);
    const result = await response.json();


    return result.list;

}