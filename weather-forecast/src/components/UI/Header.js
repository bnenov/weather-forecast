import LocationInfo from "../location/LocationInfo";
import LocationSearch from "../location/LocationSearch";
import classes from './Header.module.css';

const Header = () => {
    return(
        <div className={classes.header}>
            <h2>Weather App</h2>
        </div>
    )
}

export default Header;