import axios from "axios";
import { API_KEY } from "Config/config";
import { CURRENT_FORCAST_API_URL, CURRENT_5DAY_FORCAST_API_URL } from "Resources/apiUrls";

export const getCurrentForcastService = async (payload) => {
	const url = `${CURRENT_FORCAST_API_URL}/${payload}?apikey=${API_KEY}&language=en-us&details=false`;
	try {
		const data = await axios.get(url);
		return data;
	} catch (error) {
		throw error;
	}
};

export const get5DayForcastService = async (payload) => {
	const url = `${CURRENT_5DAY_FORCAST_API_URL}/${payload}?apikey=${API_KEY}&language=en-us&details=false&metric=true`;
	try {
		const data = await axios.get(url);
		return data;
	} catch (error) {
		throw error;
	}
};
