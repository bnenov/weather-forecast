import classes from './WeatherSummary.module.css';
import CurrentWeather from "./CurrentWeather";

const WeatherSummary = (props) => {
    return (
        <div className={classes['summary-container']}>
            <CurrentWeather />
        </div>
    )
}

export default WeatherSummary;