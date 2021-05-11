import axios from "axios";
import { API_KEY } from "Config/config";
import { LOCATION_AUTOCOMPLETE_API_URL, LOCATION_BY_LAT_LON_API_URL } from "Resources/apiUrls";

export const getLocationAutoCompleteService = async (payload) => {
	const url = `${LOCATION_AUTOCOMPLETE_API_URL}?apsikey=${API_KEY}&q=${payload}`;
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		throw error;
	}
};

export const getLocationKeyByLatLonService = async (payload) => {
	const url = `${LOCATION_BY_LAT_LON_API_URL}?apiskey=${API_KEY}&q=${payload}`;
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		throw error;
	}
};
