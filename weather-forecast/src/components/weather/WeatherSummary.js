import classes from './WeatherSummary.module.css';
import CurrentWeather from "./CurrentWeather";
import { getWeatherData } from '../../utils/getWeatherData';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const WeatherSummary = (props) => {

    const [data, setData] = useState({
        location: "Test",
        country: "TS",
        temperature: "5"
    });

    const onWeatherRequest = async () => {
        
        if (props.data) {
            const result = await getWeatherData(props.data);
            console.log("Hello inside");
            console.log(result);

            const transformedData = {
                city: result.name,
                country: props.data.country,
                temperature: result.main.temp,
            }

            setData(transformedData);
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