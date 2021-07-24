import React, { useState, useEffect } from 'react';
import GlobalStyle from './theme/globalStyle';
import Sidebar from './components/Sidebar';
import Clients from './pages/Clients';
import Products from './pages/Products';
import LocalStorage from './services/LocalStorage';

export enum Screen {
	CLIENTS,
	PRODUCTS
}

function App():JSX.Element {
	const [currentScreen, setCurrentScreen] = useState(Screen.CLIENTS);

	useEffect(() => {
		localStorage.clear();
		LocalStorage.setInitialLocalStorage();
	}, []);

	const handleClick = (screen:Screen) => {
		setCurrentScreen(screen);
	};

	return (
		<>
			<GlobalStyle />
			<div className="App">
				<Sidebar handleClick={handleClick} />
				{currentScreen === Screen.CLIENTS && <Clients />}
				{currentScreen === Screen.PRODUCTS && <Products />}
			</div>
		</>
	);
}

export default App;
