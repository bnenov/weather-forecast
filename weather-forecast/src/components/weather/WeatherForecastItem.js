const WeatherForecastItem = (props) => {
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <img src={props.icon} />
                <p>{props.temperature}</p>
            </div>
        </li>

    )
}

export default WeatherForecastItem;