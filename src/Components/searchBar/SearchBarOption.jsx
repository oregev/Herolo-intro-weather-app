import React from 'react';
import PropTypes from 'prop-types';

export const SearchBarOption = ({ location, setChoice }) => {
    const chooseHandler = () => setChoice(location);
    return (
        <div 
            className="searchBarOption"
            onClick={chooseHandler}
        >
            {location.LocalizedName}
        </div>
    );
};

SearchBarOption.propType = {
    location: PropTypes.array.isRequired,
    setChoice: PropTypes.func.isRequired,
};
