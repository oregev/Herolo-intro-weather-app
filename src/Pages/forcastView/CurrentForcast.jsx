import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeartSvg } from 'Assets/svg/HeartSvg';
import { HEART_TRANSITION_TIMEOUT } from 'Resources/consts';

export const CurrentForcast = () => {
    const { currentData, city, tempScale } = useSelector(state => state.forcastData);
    const favorites = useSelector(state => state.favoritesData);
    const isFavorite = favorites.some((fav) => fav.city.Key === city.Key);

    const {
        WeatherText, 
        WeatherIcon, 
        HasPrecipitation, 
        PrecipitationType, 
        IsDayTime,
        Temperature,
    } = currentData;

    const scales = {
        celcius: Temperature?.Metric.Value,
        fahrenheit: Temperature?.Imperial.Value,
    };

    const precipitationTag = HasPrecipitation ? 'Yes' : 'No';
    const getPartOfDay = IsDayTime ? 'Day' : 'Night';

    const loadIcon = (IconNum) => IconNum && require(`Assets/icons/${IconNum < 10 ? '0' + IconNum : IconNum}-s.png`).default;

    return (
        <div className="currentForcast">
            <header className="currentForcast--header">
                <h3>Current conditions<span>in</span>{city.LocalizedName}</h3>
            </header>
            <div className="currentForcast--body">
                <div className="currentForcast--details">
                    <p>Weather:  <span>{WeatherText}</span></p>
                    <p>Percipitations:  <span>{precipitationTag} {PrecipitationType}</span></p>
                    <p>Daytime:  <span>{getPartOfDay}</span></p>
                </div>
                <div className="currentForcast--temp">
                    <p>{scales[tempScale]}˚</p>
                    <img src={loadIcon(WeatherIcon)} alt="Forcast daytime icon"/>
                </div>
            </div>
            <footer className="currentForcast--footer">
                <CSSTransition 
                    in={isFavorite}
                    timeout={HEART_TRANSITION_TIMEOUT}
                    classNames="favoriteEffect"
                    unmountOnExit
                >			
                    <HeartSvg />
                </CSSTransition>
            </footer>
        </div>
    );
};
