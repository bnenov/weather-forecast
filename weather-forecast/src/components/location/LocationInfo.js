import classes from './LocationInfo.module.css';

const LocationInfo = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.location}>
                <h2>Weather in Sofia</h2>
                <p>600m alt</p>
            </div>
            <div className={classes['time-and-weather']}>
                <div className={classes.degrees}>
                    <h2>10 °C</h2>
                </div>
                <div className={classes.datetime}>
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
        </div>
    )
}

export default LocationInfo;