import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import { INITIAL_LOADER_SIZE } from 'Resources/consts';

export const Spinner = ({ size = INITIAL_LOADER_SIZE }) => {
	const canvasRef = useRef();
	const context = useRef();
	
	const CANVAS_SIZE = size * 2;
	const CANVAS_CENTER = size;
	const RADIUS = size;
	const START_ANGLE = (0 * Math.PI) / 180;
	const END_ENGLE = (270 * Math.PI) / 180;

	const drawLoader = useCallback(() => {
		const ctx = context.current;
		ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
		ctx.beginPath();
		ctx.lineWidth = size / 10;
		ctx.arc(CANVAS_CENTER, CANVAS_CENTER, RADIUS, START_ANGLE, END_ENGLE);
		ctx.stroke();
	}, [size, CANVAS_SIZE, CANVAS_CENTER, RADIUS, START_ANGLE, END_ENGLE]);

	useEffect(() => {
		context.current = canvasRef.current.getContext("2d");
		drawLoader();
	}, [drawLoader]);

	return (
		<div className="spinner">
			<canvas 
				ref={canvasRef} 
				className="spinner--canvas" 
				height={CANVAS_SIZE} 
				width={CANVAS_SIZE}
			></canvas>
		</div>
	);
};

Spinner.defaultProps = {
	size: INITIAL_LOADER_SIZE,
};

Spinner.propTypes = {
	size: PropTypes.number,
};
