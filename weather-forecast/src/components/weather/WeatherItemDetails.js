import { getWeatherIcon } from '../../utils/getWeatherIcon';
import classes from './WeatherItemDetails.module.css';

const WeatherItemDetails = (props) => {
    return(
        <div className={classes.container}>
            <table className={classes['weather-details-tbl']}>
                <tbody>
                    {/* hours */}
                    <tr>
                        <th>{props.itemDetails.day}</th>
                        {props.itemDetails.hourly.map((hour) => (
                            <td>{hour.time}</td>
                        ))}
                    </tr>
                    {/* icons */}
                    <tr>
                        <th></th>
                        {props.itemDetails.hourly.map((item) => (
                            <td><img src={`/images/${getWeatherIcon(item.icon)}`} /></td>
                        ))}
                    </tr>
                    {/* temperatures */}
                    <tr>
                        <th>Temperature (°C)</th>
                        {props.itemDetails.hourly.map((item) => (
                            <td>{item.temperature.temp}°</td>
                        ))}
                    </tr>
                    {/* windchills */}
                    <tr>
                        <th>Feels like (°C)</th>
                        {props.itemDetails.hourly.map((item) => (
                            <td>{item.temperature.feelsLike}°</td>
                        ))}
                    </tr>
                    {/* windspeeds */}
                    <tr>
                        <th>Wind speed (km/h)</th>
                        {props.itemDetails.hourly.map((item) => (
                            <td>{item.windSpeed}</td>
                        ))}
                    </tr>
                    {/* percips */}
                    {/* <tr>
                        <th>Precipitation (mm/3h)</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr> */}
                    {/* perciprobs */}
                    {/* <tr>
                        <th>Chance of precipitation</th>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default WeatherItemDetails;