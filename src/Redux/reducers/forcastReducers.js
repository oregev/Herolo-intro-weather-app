import {
	CURRENT_WEATHER_REQUEST,
	CURRENT_WEATHER_REQUEST_SUCCESS,
	CURRENT_WEATHER_REQUEST_FAIL,
	CURRENT_5DAY_FORCAST_REQUEST,
	CURRENT_5DAY_FORCAST_REQUEST_SUCCESS,
	CURRENT_5DAY_FORCAST_REQUEST_FAIL,
	UPDATE_CHOOSEN_CITY,
	UPDATE_TEMP_SCALE,
} from "Redux/consts/forcastConsts";
import { initialCityState } from "Resources/initialCityState";
import { convertTofahrenheit, convertToCelcius } from "Tools/tempConverters";

import { daysMockData } from "Resources/daysMockData";

const initialForcastState = {
	currentData: {},
	daysData: daysMockData,
	city: initialCityState,
	tempScale: "celcius",
	loading: false,
	error: null,
};

const convertToTemp = (temp, tempScale) => {
	return tempScale === "celcius" ? convertToCelcius(temp) : convertTofahrenheit(temp);
};

const formatDaysData = (daysData, tempScale) =>
	daysData.map((day) => {
		const minTemp = convertToTemp(day.Temperature.Minimum.Value, tempScale);
		const maxTemp = convertToTemp(day.Temperature.Maximum.Value, tempScale);
		return {
			...day,
			Temperature: {
				Minimum: {
					Value: +minTemp,
				},
				Maximum: {
					Value: +maxTemp,
				},
			},
		};
	});

export const forcastReducer = (state = initialForcastState, action) => {
	switch (action.type) {
		case CURRENT_WEATHER_REQUEST:
		case CURRENT_5DAY_FORCAST_REQUEST: {
			return {
				...state,
				loading: true,
				error: null,
			};
		}
		case CURRENT_WEATHER_REQUEST_SUCCESS: {
			return {
				...state,
				currentData: { ...action.payload.data[0] },
				loading: false,
			};
		}
		case CURRENT_5DAY_FORCAST_REQUEST_SUCCESS: {
			return {
				...state,
				daysData: [...action.payload.data.DailyForecasts],
				loading: false,
			};
		}
		case CURRENT_WEATHER_REQUEST_FAIL:
		case CURRENT_5DAY_FORCAST_REQUEST_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		case UPDATE_CHOOSEN_CITY: {
			return {
				...state,
				city: action.payload,
			};
		}
		case UPDATE_TEMP_SCALE: {
			const tempScale = state.tempScale === "celcius" ? "fahrenheit" : "celcius";
			const formatedDaysData = formatDaysData(state.daysData, tempScale);
			return {
				...state,
				tempScale,
				daysData: formatedDaysData,
			};
		}
		default: {
			return state;
		}
	}
};
