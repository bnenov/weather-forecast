import WeatherForecastItem from "./WeatherForecastItem";
import classes from './WeatherForecastItemList.module.css';

const WeatherForecastItemList = (props) => {

    console.log(props);
    return (
        <ul className={classes.container}>
            {props.items.map(item => {
                return (
                    <WeatherForecastItem id={item.id} name={item.name} icon={item.icon} temperature={item.temperature} currDate={item.currDate} />
                )
            })}
        </ul>
    )
}

export default WeatherForecastItemList;