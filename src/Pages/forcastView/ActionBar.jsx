import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { saveCityToFavoritesAction, removeCityFromFavoritesAction } from 'Redux/actions/favoritesActions';
import { TrashSvg } from 'Assets/svg/TrashSvg';
import { HeartSvg } from 'Assets/svg/HeartSvg';

export const ActionBar = ({ city }) => {
    const dispatch = useDispatch();
    
    const favorites = useSelector(state => state.favoritesData);
    const { currentData } = useSelector(state => state.forcastData);
    const isFavorite = favorites.some((fav) => fav.city.Key === city.Key);
    
    const saveHandler = () => dispatch(saveCityToFavoritesAction({city, currentData}));
    const removeHandler = () => dispatch(removeCityFromFavoritesAction(city.Key));

    const saveStyle = !isFavorite ? 'active' : 'disable';
    const removeStyle = isFavorite ? 'active' : 'disable';

    return (
        <div className="actionBar">
            <button 
                className={`actionBar--action action-${saveStyle}`}
                onClick={saveHandler}
            >
                <HeartSvg />
            </button>
            <div 
                className={`actionBar--action action-${removeStyle}`}
                onClick={removeHandler}    
            >
                <TrashSvg />
            </div>
        </div>
    );
};

ActionBar.propType = {
    city: PropTypes.object.isRequired,
};