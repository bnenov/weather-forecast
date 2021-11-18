import classes from './WeatherForecastItem.module.css';

const WeatherForecastItem = (props) => {


    return (
        <li key={props.id} className={classes.day}>
            <div>
                <h3>{props.name}</h3>
                <p>{props.currDate}</p>
                <img src={props.icon} />
                <p>{props.temperature} °C</p>
            </div>
        </li>

    )
}

export default WeatherForecastItem;