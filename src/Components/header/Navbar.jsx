import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeartSvg } from  'Assets/svg/HeartSvg';
import { HouseSvg } from 'Assets/svg/HouseSvg'; 
import { SunSvg } from 'Assets/svg/SunSvg';
import { MoonSvg } from 'Assets/svg/MoonSvg';
import { TempScaleChooser } from 'Components/common/tempScale/TempScaleChooser';

export const Navbar = ({ mode, setMode }) => {
    const changeMode = () => setMode(!mode);
    return (
        <nav className="nav">
             <div className="nav--link">
                <div className="nav--svgBack" onClick={changeMode}>
                    { mode ? <SunSvg /> : <MoonSvg/> }
                </div>
                <span>Mode</span>
            </div>
            <div className="nav--link">
                <TempScaleChooser />
                <span>C/F</span>
            </div>
            <Link to="/favorites" className="nav--link">
                <div className="nav--svgBack nav--svgBack-heart">
                    <HeartSvg />
                </div>
                <span>Fav</span> 
            </Link>
            <Link to="/" className="nav--link">
                <div className="nav--svgBack">
                    <HouseSvg />
                </div>
                <span>Home</span>
            </Link>
        </nav>
    );
};

Navbar.propType = {
    mode: PropTypes.bool.isRequired,
    setMode: PropTypes.func.isRequired,
};
