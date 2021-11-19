import LocationInfo from "../location/LocationInfo";
import LocationSearch from "../location/LocationSearch";
import classes from './Header.module.css';

const Header = () => {
    return(
        <div className={classes.header}>
            <h1>Weather App</h1>
        </div>
    )
}

export default Header;