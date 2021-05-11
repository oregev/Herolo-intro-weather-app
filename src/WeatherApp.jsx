import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { getCurrentForcastsThunk } from 'Redux/thunks/forcastThunks';
import { getLocationKeyByLatLonThunk } from 'Redux/thunks/locationsThunk';
import { Header } from 'Components/header/Header';
import { SearchBar } from 'Components/searchBar/SearchBar';
import { ForcastView } from "Pages/forcastView/ForcastView";
import { FavoritesView } from "Pages/favoritesView/FavoritesView";
import { GeolocationError } from 'Components/errors/GeolocationError'
import { INITIAL_CITY_CODE, ERROR_CLOSE_TIMEOUT } from 'Resources/consts';

import 'Styles/root.css';
import 'Styles/themes.css';
import 'Styles/transitions.css';
import 'Styles/weatherApp.css';
import 'Styles/pages/forcastView/actionBar.css';
import 'Styles/pages/forcastView/currentForcast.css';
import 'Styles/pages/forcastView/daysForcast.css';
import 'Styles/pages/forcastView/forcastView.css';
import 'Styles/pages/favoritesView/favoritesView.css';
import 'Styles/pages/favoritesView/singleCity.css';
import 'Styles/components/header.css';
import 'Styles/components/navbar.css';
import 'Styles/components/searchBar.css';
import 'Styles/components/tempScale.css';
import 'Styles/components/spinner.css';
import 'Styles/components/error.css';
import 'react-toastify/dist/ReactToastify.css';
                 
export const WeatherApp = () => {
    const dispatch = useDispatch();

    const getLocation = useCallback(() =>  dispatch(getCurrentForcastsThunk(INITIAL_CITY_CODE)), [dispatch]);

    useEffect(() => {
        
        const success = (location) => {
            const lat = location.coords.latitude;
            const lon = location.coords.longitude;
            if(lat && lon) {
                dispatch(getLocationKeyByLatLonThunk(`${lat}%${lon}`))
            }
        }
        const error = (error) => {
            toast.error(<GeolocationError message={error.message}/>, { autoClose: ERROR_CLOSE_TIMEOUT });
            getLocation();
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }, [dispatch, getLocation]);
    
    const [mode, setMode] = useState(true);
    const themeMode = mode ? 'lightMode' : 'darkMode';

    return (
        <div className={`weatherApp--component ${themeMode}`}>
            <Router>
                <Header mode={mode} setMode={setMode}/>
                <Switch>
                    <Route exact path="/">
                        <SearchBar />
                        <ForcastView />
                    </Route>
                    <Route exact path="/favorites">
                        <FavoritesView />
                    </Route>
                </Switch>
                <ToastContainer limit={5} position="bottom-right"/>
            </Router>
        </div>
    );
};
