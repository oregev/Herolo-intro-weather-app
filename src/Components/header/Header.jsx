import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

export const Header = ({ mode, setMode }) => {
    return (
        <div className="header">
            <div className="header--header">
                <h1>Weather NOW</h1>
                <span>weather in your fingertips</span>
            </div>
            <Navbar mode={mode} setMode={setMode}/>
        </div>
    );
};

Header.propType = {
    mode: PropTypes.bool.isRequired,
    setMode: PropTypes.func.isRequired,
};
