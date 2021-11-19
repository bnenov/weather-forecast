import { useEffect, useState } from 'react';
import classes from './WeatherForecastItem.module.css';

const WeatherForecastItem = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        props.onClick(isClicked)
    }, [isClicked]);


    const onClickHandler = () => {
        if(isClicked) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
        }
        console.log("clicked");
    }

    const liClasses = `${classes.day} ${isClicked ? classes.clicked : ''}`;


    return (
        <li key={props.id} className={liClasses} onClick={onClickHandler}>
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