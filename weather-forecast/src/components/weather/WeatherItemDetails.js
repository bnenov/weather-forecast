import classes from './WeatherItemDetails.module.css';

const WeatherItemDetails = (props) => {
    return(
        <div className={classes.container}>
            <div>
                <h2>{props.itemDetails.name}</h2>
            </div>
            <div>
                <p>Temperature: {props.itemDetails.temperature}</p>
                <p>Feels like: 22</p>
                <p>Wind direction: north-west</p>
                <p>Wind speed (km / h) </p>
                <p>Precipitation (mm / 3h) </p>
                <p>Chance of precipitation</p>
            </div>
        </div>
    )
}

export default WeatherItemDetails;