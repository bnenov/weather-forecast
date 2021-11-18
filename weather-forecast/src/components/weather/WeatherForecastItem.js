import classes from './WeatherForecastItem.module.css';

const WeatherForecastItem = (props) => {


    const clickHandler = () => {
        console.log("clicked me");
    }

    return (
        <li className={classes.day} onClick={clickHandler}>
            <div>
                <h3>{props.name}</h3>
                <img src={props.icon} />
                <p>{props.temperature} °C</p>
            </div>
        </li>

    )
}

export default WeatherForecastItem;