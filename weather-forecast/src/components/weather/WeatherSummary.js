import classes from './WeatherSummary.module.css';
import CurrentWeather from "./CurrentWeather";
import { getCurrentWeatherData } from '../../utils/getCurrentWeatherData';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const WeatherSummary = (props) => {

    const [data, setData] = useState({
        city: "",
        country: "",
        temperature: "",
        weatherIcon: "",
        weatherDescription: ""
    });

    const onWeatherRequest = async () => {
        
        if (props.data) {
            const result = await getCurrentWeatherData(props.data);
            console.log("Hello inside");
            console.log(result);

            const transformedData = {
                city: result.name,
                country: props.data.country,
                temperature: result.main.temp,
                weatherIcon: result.weather[0].icon,
                weatherDescription: result.weather[0].description
            }

            setData(transformedData);

            // const updatedLocation = {
            //     city: transformedData.city,
            //     country: transformedData.country,
            //     lat: Math.round( result.coord.lat * 100 + Number.EPSILON ) / 100,
            //     lon: Math.round( result.coord.lon * 100 + Number.EPSILON ) / 100
            // }

            // props.onLocationUpdate(updatedLocation);
        }
    }

    useEffect(() => {
        onWeatherRequest();
    }, [props.data]);




    return (
        <div className={classes['summary-container']}>
            <CurrentWeather data={data} />
        </div>
    )
}

export default WeatherSummary;