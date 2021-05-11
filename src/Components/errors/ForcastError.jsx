import React from 'react';
import PropTypes from 'prop-types';

export const ForcastError = ({ message }) => {
    return (
        <div className="error">
            <p><strong>Forcast could not be retrived due to: </strong></p>
            <br/>
            <span>{message}</span>
        </div>
    );
};

ForcastError.propTypes = {
    message: PropTypes.string.isRequired
};
