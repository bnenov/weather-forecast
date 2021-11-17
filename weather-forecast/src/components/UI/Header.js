import LocationInfo from "../location/LocationInfo";
import LocationSearch from "../location/LocationSearch";
import classes from './Header.module.css';

const Header = () => {
    return(
        <div className={classes.header}>
            <LocationInfo />
            <LocationSearch />
        </div>
    )
}

export default Header;