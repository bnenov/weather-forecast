import classes from './LocationSearch.module.css';

const LocationSearch = (props) => {
    return (
        <div className={classes.container}>
            <form>
                <label>Search Location...</label>
                <input
                    type="text"
                    placeholder="Search for location..."
                    id="location-search"
                    name="location-search"
                />
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default LocationSearch;