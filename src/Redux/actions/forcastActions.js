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

export const getCurrentForcastRequestAction = (payload) => ({
	type: CURRENT_WEATHER_REQUEST,
	payload,
});

export const getCurrentForcastRequestSuccessAction = (payload) => ({
	type: CURRENT_WEATHER_REQUEST_SUCCESS,
	payload,
});

export const getCurrentForcastRequestFailAction = (payload) => ({
	type: CURRENT_WEATHER_REQUEST_FAIL,
	payload,
});

export const get5DayForcastRequestAction = (payload) => ({
	type: CURRENT_5DAY_FORCAST_REQUEST,
	payload,
});

export const get5DayForcastRequestSuccessAction = (payload) => ({
	type: CURRENT_5DAY_FORCAST_REQUEST_SUCCESS,
	payload,
});

export const get5DayForcastRequestFailAction = (payload) => ({
	type: CURRENT_5DAY_FORCAST_REQUEST_FAIL,
	payload,
});

export const updateChoosenCityAction = (payload) => ({
	type: UPDATE_CHOOSEN_CITY,
	payload,
});

export const updateTempScaleAction = () => ({
	type: UPDATE_TEMP_SCALE,
});
