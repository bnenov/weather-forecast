import { useState } from "react"
import WeatherForecastItemList from "./WeatherForecastItemList"
import WeatherItemDetails from "./WeatherItemDetails"


const WeatherForecast = (props) => {

    const [itemClicked, setItemClicked] = useState(false);
    const [itemDetails, setItemDetails] = useState();

    const itemClickHandler = (isClicked) => {
        setItemClicked(isClicked);
    }

    const itemDetailsHandler = (details) => {
        setItemDetails(details);
    }

    return (
        <div>
            <WeatherForecastItemList items={props.items} onClick={itemClickHandler} itemDetails={itemDetailsHandler} />
            {itemClicked && <WeatherItemDetails itemDetails={itemDetails}/>}
        </div>
    )
}

export default WeatherForecast