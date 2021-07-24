import { createGlobalStyle } from 'styled-components';
const fontUrl = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700';

/*
	cores: 
	#003b56
	#3e474c
	#f18d32
	#f46224
	#418078
	#156c6c
*/

const globalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
	}

	* {
			@font-face {
				font-family: 'Quicksand';
				src: url(${fontUrl});
			}

			@media (min-width: 1920px) {
				font-size: 150%;
			}

			@media (min-width: 3840px) {
				font-size: 250%;
			}
		}

	body {
		color: white;
		height: 100vh;
		background-color: #3e474c;
	}

	.App {
		font-family: 'Quicksand';
	}
`;

export default globalStyle;