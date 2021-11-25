import { useDate } from '../../hooks/useDate';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import classes from './CurrentWeather.module.css';

const CurrentWeather = (props) => {

    const {date, time} = useDate();

    return (
        <div className={classes.container}>
            <div className={classes.location}>
                <div>
                    <h2>Weather in {props.data.city}, {props.data.country}</h2>
                    {/* <p>600m alt</p> */}
                </div>
                <div className={classes.datetime}>
                    <div>
                        <p>{time}</p>
                    </div>
                    <div>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <div className={classes.temperature}>
                <div>
                    <h1>{Math.round(props.data.temperature)} °C</h1>
                </div>
                <div>
                    <img src={`/images/${getWeatherIcon(props.data.weatherIcon)}`}></img>
                </div>
                <div>
                    <p>{props.data.weatherDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;