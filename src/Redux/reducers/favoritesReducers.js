import { SAVE_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "Redux/consts/favoritesConsts";

export const favoritesReducer = (state = [], action) => {
	switch (action.type) {
		case SAVE_TO_FAVORITES: {
			return [...state, action.payload];
		}
		case REMOVE_FROM_FAVORITES: {
			const favorites = state.filter((fav) => fav.city.Key !== action.payload);
			return [...favorites];
		}
		default: {
			return state;
		}
	}
};
