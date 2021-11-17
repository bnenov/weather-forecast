import LocationInfo from "../location/LocationInfo";
import classes from './Header.module.css';

const Header = () => {
    return(
        <div className={classes.header}>
            <LocationInfo />
        </div>
    )
}

export default Header;