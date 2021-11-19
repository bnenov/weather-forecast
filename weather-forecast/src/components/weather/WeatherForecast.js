import { useState } from "react"
import WeatherForecastItemList from "./WeatherForecastItemList"
import WeatherItemDetails from "./WeatherItemDetails"


const WeatherForecast = (props) => {

    const [itemClicked, setItemClicked] = useState(false);

    const itemClickHandler = (isClicked) => {
        setItemClicked(isClicked);
    }

    return (
        <div>
            <WeatherForecastItemList items={props.items} onClick={itemClickHandler} />
            {itemClicked && <WeatherItemDetails />}
        </div>
    )
}

export default WeatherForecast