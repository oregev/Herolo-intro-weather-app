import { SAVE_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "Redux/consts/favoritesConsts";

export const saveCityToFavoritesAction = (payload) => ({
	type: SAVE_TO_FAVORITES,
	payload,
});

export const removeCityFromFavoritesAction = (payload) => ({
	type: REMOVE_FROM_FAVORITES,
	payload,
});
