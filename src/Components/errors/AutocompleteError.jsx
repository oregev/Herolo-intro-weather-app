import React from 'react';
import PropTypes from 'prop-types';

export const AutocompleteError = ({ message }) => {
    return (
        <div className="error">
            <p><strong>Autocomplete could not retrive locations due to: </strong></p>
            <br/>
            <span>{message}</span>
        </div>
    );
};

AutocompleteError.propTypes = {
    message: PropTypes.string.isRequired
};
