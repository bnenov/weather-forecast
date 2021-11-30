import { API_KEY } from "./Constants";

export const getLocationCoordinates = async (locationData) => {

    console.log("Inside getLocationCoordinates: ", locationData);

    const urlCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${locationData.city},${locationData.country}&limit=1&appid=${API_KEY}`;

    console.log(urlCoordinates);
    const response = await fetch(urlCoordinates);
    const result = await response.json();

    return {
        lat: result[0].lat,
        lon: result[0].lon
    };


}