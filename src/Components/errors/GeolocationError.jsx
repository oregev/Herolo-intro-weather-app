import React from 'react';
import PropTypes from 'prop-types';

export const GeolocationError = ({ message }) => {
    return (
        <div className="error">
            <p><strong>Geolocation could not be retrived due to: </strong></p>
            <br/>
            <span>{message}</span>
        </div>
    );
};

GeolocationError.propTypes = {
    message: PropTypes.string.isRequired
};
