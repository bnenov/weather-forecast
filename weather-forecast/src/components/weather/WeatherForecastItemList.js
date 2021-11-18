import WeatherForecastItem from "./WeatherForecastItem";
import classes from './WeatherForecastItemList.module.css';

const WeatherForecastItemList = (props) => {
    return (
        <ul className={classes.container}>
            {props.items.map(item => {
                return (
                    <WeatherForecastItem name={item.name} icon={item.icon} temperature={item.temperature} />
                )
            })}
        </ul>
    )
}

export default WeatherForecastItemList;