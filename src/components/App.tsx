/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './repositoriesList';
function App() {
	return (
		<Provider store={store}>
			<h1>Search your package</h1>
			<RepositoriesList />
		</Provider>
	);
}

export default App;
