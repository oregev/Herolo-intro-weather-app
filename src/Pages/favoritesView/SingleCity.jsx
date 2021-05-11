import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentForcastsThunk } from 'Redux/thunks/forcastThunks';
import { removeCityFromFavoritesAction } from 'Redux/actions/favoritesActions';
import { updateChoosenCityAction } from 'Redux/actions/forcastActions';

export const SingleCity = ({ data }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { tempScale } = useSelector(state => state.forcastData);
    const { city, currentData } = data;
    
    const scales = {
        celcius: currentData.Temperature?.Metric.Value,
        fahrenheit: currentData.Temperature?.Imperial.Value,
    };

    const removeHandler = () => dispatch(removeCityFromFavoritesAction(city.Key));

    const changeToForcastHandler = () => {
        history.push('/');
        dispatch(getCurrentForcastsThunk(city.Key));
        dispatch(updateChoosenCityAction(city));
    };

    const loadIcon = (IconNum) => IconNum && require(`Assets/icons/${IconNum < 10 ? '0' + IconNum : IconNum}-s.png`).default;
    
    return (
        <div className="singleCity">
            <div className="singleCity--header">
                <p>{city.LocalizedName}</p>
                <span className="singleCity--closeButton" onClick={removeHandler}><span>+</span></span>
            </div>
            <div className="singleCity--body" onClick={changeToForcastHandler}>
                <span>{scales[tempScale]}˚</span>
                <img src={loadIcon(currentData.WeatherIcon)} alt="Forcast icon"/>
                <p className="singleCity--text">{currentData.WeatherText}</p>
            </div>
        </div>
    );
};

SingleCity.propType = {
    data: PropTypes.object.isRequired,
};
