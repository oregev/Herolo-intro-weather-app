import React from 'react';
import PropTypes from 'prop-types';

export const LocationError = ({ message }) => {
    return (
        <div className="error">
            <p><strong>Location could not be retrived due to: </strong></p>
            <br/>
            <span>{message}</span>
        </div>
    );
};

LocationError.propTypes = {
    message: PropTypes.string.isRequired
};
