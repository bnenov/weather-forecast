import { useState } from 'react/cjs/react.development';
import classes from './LocationSearch.module.css';
import jsonp from 'jsonp';
import { Fragment } from 'react';
import { getCountryCode } from '../../utils/getCountryCode';

const LocationSearch = (props) => {

    const [searchInputVal, setSearchInputVal] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');


    const onChange = (e) => {
        const searchVal = e.target.value;

        jsonp(
            `http://gd.geobytes.com/AutoCompleteCity?q=${searchVal}`,
            null,
            (err, data) => {
                if (err) {
                    console.log("error");
                    console.log(err.message);
                } else {
                    if (data[0] !== '%s' && data[0] !== '') {
                        console.log("Hello");
                        console.log(data);
                        setSearchSuggestions(data);
                    } else {
                        setSearchSuggestions([]);
                    }
                }
            }

        );

        setSearchInputVal(searchVal);
    };

    const onClick = async (selectedVal) => {

        setSearchInputVal(selectedVal);
        const data = selectedVal.split(',');
        setCity(data[0]);
        const ctry = await getCountryCode(data[2]);
        console.log(ctry);
        setCountry(ctry);
        setSearchSuggestions([]);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            city: city,
            country: country
        }

        props.onLocationSearch(data);

        setSearchInputVal('');
    }

    return (
        <Fragment>
            <div className={classes.container}>
                <form onSubmit={onSubmit}>
                    <input className={classes.search}
                        type="text"
                        placeholder="Search for location..."
                        id="location-search"
                        name="location-search"
                        onChange={onChange}
                        value={searchInputVal}
                        autoComplete="off"
                    />
                    <button type="submit" >Search</button>
                </form>
                {searchSuggestions.length > 0 && <div className={classes.dropdown}>
                    <ul>
                        {searchSuggestions.map(suggestion => (
                            <li onClick={() => onClick( suggestion )}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>

        </Fragment>
    )
}

export default LocationSearch;