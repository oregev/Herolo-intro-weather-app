import React from 'react';
import { useSelector } from 'react-redux';
import { TempScale } from 'Components/common/tempScale/TempScale';
import { DaysForcast } from './DaysForcast';
import { CurrentForcast } from './CurrentForcast';
import { ActionBar } from './ActionBar';

export const ForcastView = () => {
    const { city } = useSelector(state => state.forcastData);

    return (
        <div className="forcastView">
            <header className="forcastView--header">
                <div className="forcastView--title">
                    { city.LocalizedName && <h2>{city.LocalizedName}, {city.Country.LocalizedName}</h2> }
                </div>
                <ActionBar city={city}/>
                <TempScale />
            </header>
            <CurrentForcast />
            <DaysForcast />
        </div>
    );
};
