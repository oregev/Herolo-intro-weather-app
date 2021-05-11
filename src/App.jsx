import { Provider } from "react-redux";
import { store } from 'Redux/store';
import {  WeatherApp } from 'WeatherApp';
import "Styles/app.css";

function App() {
	return 	(
		<div className="app">
			<Provider store={store}>
				<WeatherApp />
			</Provider>
		</div>
	);
};

export default App;
