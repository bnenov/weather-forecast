import classes from './WeatherItemDetails.module.css';

const WeatherItemDetails = (props) => {
    return(
        <div className={classes.container}>
            <table className={classes['weather-details-tbl']}>
                <tbody>
                    {/* times */}
                    <tr>
                        <th>{props.itemDetails.fullName}</th>
                        <td>03:00</td>
                        <td>06:00</td>
                        <td>09:00</td>
                        <td>12:00</td>
                        <td>15:00</td>
                        <td>18:00</td>
                        <td>21:00</td>
                        <td>00:00</td>
                    </tr>
                    {/* icons */}
                    <tr>
                        <th></th>
                        <td><img src="/images/day.svg" alt="sunny"/></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                        <td><img src="/images/day.svg" alt="sunny" /></td>
                    </tr>
                    {/* temperatures */}
                    <tr>
                        <th>Temperature (°C)</th>
                        <td>10°</td>
                        <td>12°</td>
                        <td>12°</td>
                        <td>14°</td>
                        <td>18°</td>
                        <td>18°</td>
                        <td>12°</td>
                        <td>10°</td>
                    </tr>
                    {/* windchills */}
                    <tr>
                        <th>Feels like (°C)</th>
                        <td>10°</td>
                        <td>12°</td>
                        <td>12°</td>
                        <td>14°</td>
                        <td>18°</td>
                        <td>18°</td>
                        <td>12°</td>
                        <td>10°</td>
                    </tr>
                    {/* windspeeds */}
                    <tr>
                        <th>Wind speed (km/h)</th>
                        <td>5</td>
                        <td>5</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    {/* percips */}
                    <tr>
                        <th>Precipitation (mm/3h)</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    {/* perciprobs */}
                    <tr>
                        <th>Chance of precipitation</th>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeatherItemDetails;