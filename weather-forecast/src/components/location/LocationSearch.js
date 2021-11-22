import { useState } from 'react/cjs/react.development';
import classes from './LocationSearch.module.css';
import jsonp from 'jsonp';
import { Fragment } from 'react';

const LocationSearch = (props) => {

    const [searchInputVal, setSearchInputVal] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [error, setError] = useState(null);


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

    const onClick = (selectedVal) => {
        console.log(selectedVal);
        setSearchInputVal(selectedVal);
        setSearchSuggestions([]);
    }

    const onSubmit = (e) => {
        e.preventDefault();
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