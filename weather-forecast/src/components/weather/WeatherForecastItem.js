import classes from './WeatherForecastItem.module.css';

const WeatherForecastItem = (props) => {
    return (
        <li className={classes.day}>
            <div>
                <h3>{props.name}</h3>
                <img src={props.icon} />
                <p>{props.temperature} °C</p>
            </div>
        </li>

    )
}

export default WeatherForecastItem;