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
        if (activeItem) {
            const itemDetails = props.items.find(item => item.id === activeItem);
            console.log(itemDetails);
            props.onClick(true);
            props.itemDetails(itemDetails);
        } else {
            props.onClick(false);
        }

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