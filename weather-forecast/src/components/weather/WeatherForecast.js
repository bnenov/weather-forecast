import { useState, useEffect } from "react"
import { getFiveDayForecast } from "../../utils/getFiveDayForecast";
import { getHourlyForecast } from "../../utils/getHourlyForecast";
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

            const resultHourly = await getHourlyForecast(props.data);

            console.log("Hourly", resultHourly);


            const transformedData = result.daily.slice(0, 5).map(day => {
                let date = new Date(day.dt * 1000);
                let dayFullName = date.toLocaleDateString('en', { weekday: 'long' });

                return (
                    {
                        id: dayFullName,
                        day: dayFullName,
                        dayShort: dayFullName.substring(0, 3),
                        currDate: date.getDate() + '.' + (date.getMonth() + 1),
                        weatherIcon: day.weather[0].icon,
                        temperature: Math.round(day.temp.max),
                        hourly: resultHourly.filter((item) => new Date(item.dt * 1000).toLocaleDateString('en', { weekday: 'long' }) === dayFullName)
                            .map((item) => {

                                let date = new Date(item.dt * 1000);
                                let hours = date.getUTCHours();
                                let time = hours < 10 ? "0" + hours + ":00" : hours + ":00";
                                return(
                                    {
                                        time: time,
                                        icon: item.weather[0].icon,
                                        temperature: {
                                            temp: Math.round(item.main.temp),
                                            feelsLike: Math.round(item.main.feels_like),
                                            min: Math.round(item.main.temp_min),
                                            max: Math.round(item.main.temp_max)
                                        },
                                        windSpeed: Math.round(item.wind.speed)
                                    }
                                );
                            })
                    }
                )

            });

            console.log(transformedData);

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