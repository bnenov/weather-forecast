import { API_KEY } from "./Constants";

export const getFiveDayForecast = async (locationData) => {
    console.log('Location daily forecast', locationData);

    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${locationData.lat}&lon=${locationData.lon}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;

    console.log(urlWeather);
    const response = await fetch(urlWeather);
    const result = await response.json();


    return result;

}