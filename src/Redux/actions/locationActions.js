import {
	LOCATION_AUTOCOMPLETE_REQUEST,
	LOCATION_AUTOCOMPLETE_REQUEST_SUCCESS,
	LOCATION_AUTOCOMPLETE_REQUEST_FAIL,
	UPDATE_LOCATION_CITY,
	LOCATION_BY_LAT_LON_REQUEST,
	LOCATION_BY_LAT_LON_REQUEST_SUCCESS,
	LOCATION_BY_LAT_LON_REQUEST_FAIL,
} from "Redux/consts/locationConsts";

export const getLocationAutoCompleteRequestAction = (payload) => ({
	type: LOCATION_AUTOCOMPLETE_REQUEST,
	payload,
});

export const getLocationAutoCompleteRequestSuccessAction = (payload) => ({
	type: LOCATION_AUTOCOMPLETE_REQUEST_SUCCESS,
	payload,
});

export const getLocationAutoCompleteRequestFailAction = (payload) => ({
	type: LOCATION_AUTOCOMPLETE_REQUEST_FAIL,
	payload,
});

export const updateLocationCityAction = (payload) => ({
	type: UPDATE_LOCATION_CITY,
	payload,
});

export const getLocationKeyByLatLonRequestAction = (payload) => ({
	type: LOCATION_BY_LAT_LON_REQUEST,
	payload,
});

export const getLocationKeyByLatLonRequestSuccessAction = (payload) => ({
	type: LOCATION_BY_LAT_LON_REQUEST_SUCCESS,
	payload,
});

export const getLocationKeyByLatLonRequestFailAction = (payload) => ({
	type: LOCATION_BY_LAT_LON_REQUEST_FAIL,
	payload,
});
