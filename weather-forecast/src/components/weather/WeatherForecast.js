import WeatherForecastItemList from "./WeatherForecastItemList"



const WeatherForecast = (props) => {
    return (
        <div>
            <WeatherForecastItemList items={props.items} />
        </div>
    )
}

export default WeatherForecast