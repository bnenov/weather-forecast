import { useEffect, useState } from 'react';
import classes from './WeatherForecastItem.module.css';

const WeatherForecastItem = (props) => {

    const isActive = props.activeItem === props.item;
    const liClasses = `${classes.day} ${isActive ? classes.active : ''}`;

    return (
        <li key={props.id} className={liClasses} onClick={ () => props.onClick(props.item)}>
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