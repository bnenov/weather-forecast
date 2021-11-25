import { useState, useEffect } from "react"
import { getFiveDayForecast } from "../../utils/getFiveDayForecast";
import WeatherForecastItemList from "./WeatherForecastItemList"
import WeatherItemDetails from "./WeatherItemDetails"


const WeatherForecast = (props) => {

    const [itemClicked, setItemClicked] = useState(false);
    const [items, setItems] = useState([]);
    const [itemDetails, setItemDetails] = useState();

    const onWeatherForecastRequest = async () => {
        if (props.data) {
            console.log("Data inside daily forecast: ", props.data);
            const result = await getFiveDayForecast(props.data);
            console.log("Inside daily forecast");
            console.log(result);

            const transformedData = result.daily.slice(0, 5).map(day => {
                let date = new Date(day.dt * 1000);

                return (
                    {
                        id: date.toLocaleDateString('en', { weekday: 'long' }),
                        day: date.toLocaleDateString('en', { weekday: 'long' }),
                        dayShort: date.toLocaleDateString('en', { weekday: 'long' }).substring(0, 3),
                        currDate: date.getDate() + '.' + (date.getMonth() + 1),
                        weatherIcon: day.weather[0].icon,
                        temperature: Math.round(day.temp.max)
                    }
                )

            });

            console.log(transformedData);

            // const transformedData = {

            //     currentDayInfo: {
            //         city: result.city.name,
            //         country: result.city.country,
            //         currDay: result.list[0].dt,
            //         currDate: result.list[0].dt_txt,
            //         temperature: result.list[0].main.temp,
            //         weatherIcon: result.list[0].weather[0].icon,
            //         weatherDescription: result.list[0].weather[0].description
            //     },

            //     forecast: result.list.map(listItem => (
            //         {
            //             day: listItem.dt,
            //             date: listItem.dt_txt,
            //             temperature: listItem.main.temp,
            //             weatherIcon: listItem.weather[0].icon
            //         }
            //     ))

            // };



            // console.log(transformedData);

            setItems(transformedData);
        }
    }

    useEffect(() => {
        onWeatherForecastRequest();
    }, [props.data]);

    const itemClickHandler = (isClicked) => {
        setItemClicked(isClicked);
    }

    const itemDetailsHandler = (details) => {
        setItemDetails(details);
    }

    return (
        <div>
            {/* <WeatherForecastItemList items={props.items} onClick={itemClickHandler} itemDetails={itemDetailsHandler} /> */}
            <WeatherForecastItemList items={items} onClick={itemClickHandler} itemDetails={itemDetailsHandler} />
            {itemClicked && <WeatherItemDetails itemDetails={itemDetails} />}
        </div>
    )
}

export default WeatherForecast