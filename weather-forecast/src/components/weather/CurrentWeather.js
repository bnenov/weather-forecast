import classes from './CurrentWeather.module.css';

const CurrentWeather = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.location}>
                <div>
                    <h2>Weather in Sofia</h2>
                    <p>600m alt</p>
                </div>
                <div className={classes.datetime}>
                    <div>
                        <h4>Thursday</h4>
                    </div>
                    <div>
                        <p>8:36</p>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                    <div>
                        <p>17.11.2021</p>
                    </div>
                </div>
            </div>
            <div className={classes.temperature}>
                <div>
                    <h1>10 °C</h1>
                </div>
                <div>
                    <img src={'/images/day.svg'}></img>
                </div>
                <div>
                    <p>Sunny</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;