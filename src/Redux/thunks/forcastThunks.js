import { toast } from "react-toastify";
import {
	getCurrentForcastRequestAction,
	getCurrentForcastRequestSuccessAction,
	getCurrentForcastRequestFailAction,
	get5DayForcastRequestAction,
	get5DayForcastRequestSuccessAction,
	get5DayForcastRequestFailAction,
} from "Redux/actions/forcastActions";
import { getCurrentForcastService, get5DayForcastService } from "Services/forcastHttpServices";
import { ForcastError } from "Components/errors/ForcastError";
import { ERROR_CLOSE_TIMEOUT } from "Resources/consts";

export const getCurrentForcastsThunk = (payload) => async (dispatch) => {
	try {
		dispatch(getCurrentForcastRequestAction());
		dispatch(get5DayForcastThunk(payload));
		const data = await getCurrentForcastService(payload);
		dispatch(getCurrentForcastRequestSuccessAction(data));
	} catch (error) {
		dispatch(getCurrentForcastRequestFailAction());
		toast.error(<ForcastError message={error.message} />, { autoClose: ERROR_CLOSE_TIMEOUT });
	}
};

export const get5DayForcastThunk = (payload) => async (dispatch) => {
	try {
		dispatch(get5DayForcastRequestAction());
		const data = await get5DayForcastService(payload);
		dispatch(get5DayForcastRequestSuccessAction(data));
	} catch (error) {
		dispatch(get5DayForcastRequestFailAction());
		toast.error(<ForcastError message={error.message} />, { autoClose: ERROR_CLOSE_TIMEOUT });
	}
};
