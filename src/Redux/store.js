import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { forcastReducer } from "Redux/reducers/forcastReducers";
import { locationReducer } from "Redux/reducers/locationReducers";
import { favoritesReducer } from "Redux/reducers/favoritesReducers";

const rootReducer = combineReducers({
	forcastData: forcastReducer,
	locationData: locationReducer,
	favoritesData: favoritesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
