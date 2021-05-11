import React from 'react';
import { useSelector } from 'react-redux';

export const TempScale= () => {
    const { tempScale } = useSelector(state => state.forcastData);

    const scales = {
        celcius: 'C',
        fahrenheit: 'F'
    };

    return (
        <div className="tempScale">
            <span>{scales[tempScale]}˚</span>
        </div>
    );
};
