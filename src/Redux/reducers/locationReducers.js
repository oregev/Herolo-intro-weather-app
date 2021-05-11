import {
	LOCATION_AUTOCOMPLETE_REQUEST,
	LOCATION_AUTOCOMPLETE_REQUEST_SUCCESS,
	LOCATION_AUTOCOMPLETE_REQUEST_FAIL,
	UPDATE_LOCATION_CITY,
	LOCATION_BY_LAT_LON_REQUEST,
	LOCATION_BY_LAT_LON_REQUEST_SUCCESS,
	LOCATION_BY_LAT_LON_REQUEST_FAIL,
} from "Redux/consts/locationConsts";

const initialLocationAutocompleteState = {
	locations: [],
	city: {},
	loading: false,
	error: null,
};

export const locationReducer = (state = initialLocationAutocompleteState, action) => {
	switch (action.type) {
		case LOCATION_AUTOCOMPLETE_REQUEST: {
			return {
				locations: [],
				city: {},
				loading: true,
				error: null,
			};
		}
		case LOCATION_AUTOCOMPLETE_REQUEST_SUCCESS: {
			return {
				...state,
				locations: [...action.payload],
				loading: false,
			};
		}
		case LOCATION_AUTOCOMPLETE_REQUEST_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		case UPDATE_LOCATION_CITY: {
			return {
				locations: [],
				city: action.payload,
				error: null,
			};
		}
		case LOCATION_BY_LAT_LON_REQUEST: {
			return {
				...state,
				loading: true,
				error: null,
			};
		}
		case LOCATION_BY_LAT_LON_REQUEST_SUCCESS: {
			return {
				...state,
				locations: [...action.payload],
				loading: false,
			};
		}
		case LOCATION_BY_LAT_LON_REQUEST_FAIL: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
