import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationAutoCompleteThunk } from 'Redux/thunks/locationsThunk';
import { getCurrentForcastsThunk } from 'Redux/thunks/forcastThunks';
import { updateLocationCityAction  } from "Redux/actions/locationActions";
import { updateChoosenCityAction  } from "Redux/actions/forcastActions";
import { Spinner } from 'Components/common/Spinner';
import { SearchBarOption } from './SearchBarOption';

export const SearchBar = () => {
    const dispatch = useDispatch();
    
    const { locations, city, loading } = useSelector(state => state.locationData);
    const [searchText, setSearchText] = useState('');

    const getLocation = (cityName) =>  dispatch(getLocationAutoCompleteThunk(cityName));

    const inputChangeHandler = (e) => {
        getLocation(e.target.value);
        setSearchText(e.target.value);
    };

    const getForcastHandler = () => {
        dispatch(getCurrentForcastsThunk(city.Key));
        dispatch(updateChoosenCityAction(city));
        setSearchText('');
    };

    const setChoiceHandler = (location) => { 
        dispatch(updateLocationCityAction(location))
        setSearchText(location.LocalizedName);
    };

    const isLocations = locations.length > 0;
    const setButtonText = searchText.length > 0 ? 'GO !' : 'Enter a City';

    return (
        <div className="searchBar">
            <div className="searchBar--search">
                <input 
                    type="text"
                    className="input input-text"
                    value={searchText}
                    onChange={inputChangeHandler}
                    placeholder="Where is it..."
                />
                { loading ? <Spinner /> : (
                    <button
                        disabled={!city}
                        onClick={getForcastHandler}
                    >
                        <span>{setButtonText}</span>
                    </button>
                )}
            </div>
            { isLocations > 0 && (
                <div className="searchOptions">
                    { locations.map((location, index) => (
                        <SearchBarOption 
                            key={location + index}
                            location={location} 
                            setChoice={setChoiceHandler}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

