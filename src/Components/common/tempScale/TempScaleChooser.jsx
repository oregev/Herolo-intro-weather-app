import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTempScaleAction } from 'Redux/actions/forcastActions';
import { TheromSvg } from 'Assets/svg/TheromSvg';

export const TempScaleChooser = () => {
    const dispatch = useDispatch();
    const tempHandler = () => dispatch(updateTempScaleAction());

    return (
        <div className="scaleChooser">
            <div className="scaleChooser--icon" onClick={tempHandler}>
                <TheromSvg />
            </div>
        </div>
    );
};
