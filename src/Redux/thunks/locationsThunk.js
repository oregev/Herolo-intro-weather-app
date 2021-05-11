import { toast } from "react-toastify";
import {
	getLocationAutoCompleteRequestAction,
	getLocationAutoCompleteRequestSuccessAction,
	getLocationAutoCompleteRequestFailAction,
	getLocationKeyByLatLonRequestAction,
	getLocationKeyByLatLonRequestSuccessAction,
	getLocationKeyByLatLonRequestFailAction,
} from "Redux/actions/locationActions";
import { getLocationAutoCompleteService, getLocationKeyByLatLonService } from "Services/locationHttpServices";
import { AutocompleteError } from "Components/errors/AutocompleteError";
import { ERROR_CLOSE_TIMEOUT } from "Resources/consts";

export const getLocationAutoCompleteThunk = (payload) => async (dispatch) => {
	try {
		dispatch(getLocationAutoCompleteRequestAction());
		const data = await getLocationAutoCompleteService(payload);
		dispatch(getLocationAutoCompleteRequestSuccessAction(data));
	} catch (error) {
		dispatch(getLocationAutoCompleteRequestFailAction(error));
		toast.error(<AutocompleteError message={error.message} />, { autoClose: ERROR_CLOSE_TIMEOUT });
	}
};

export const getLocationKeyByLatLonThunk = (payload) => async (dispatch) => {
	try {
		dispatch(getLocationKeyByLatLonRequestAction());
		const data = await getLocationKeyByLatLonService(payload);
		dispatch(getLocationKeyByLatLonRequestSuccessAction(data));
	} catch (error) {
		dispatch(getLocationKeyByLatLonRequestFailAction(error));
	}
};
