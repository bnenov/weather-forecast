import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import WeatherForecastItem from "./WeatherForecastItem";
import classes from './WeatherForecastItemList.module.css';

const WeatherForecastItemList = (props) => {

    const [activeItem, setActiveItem] = useState();

    const onClickHandler = (item) => {
        activeItem === item ? setActiveItem() : setActiveItem(item);
    }

    useEffect(() => {
        activeItem ? props.onClick(true) : props.onClick(false);
    }, [activeItem]);

    return (
        <ul className={classes.container}>
            {props.items.map(item => {
                return (
                    <WeatherForecastItem
                        id={item.id}
                        activeItem={activeItem}
                        item={item.id}
                        onClick={onClickHandler}
                        name={item.name}
                        icon={item.icon}
                        temperature={item.temperature}
                        currDate={item.currDate}
                    />
                )
            })}
        </ul>
    )
}

export default WeatherForecastItemList;