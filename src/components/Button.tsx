import styled from 'styled-components';

const Button = styled.p`
	display: inline-block;
	margin-right: 5%;
	font-size: 1.1em;
	border-radius: 10px;
	text-align: center;
	font-family: 'Quicksand';
	background-color: #156c6c;
	color: white;
	min-width: 6vw;
	padding: 1em;
	border: none;
	transition: background-color 100ms linear;
	user-select: none;
	
	&:hover {
		background-color: #02ba9e;
		cursor: pointer;
	}

	@media (min-width: 3840px) {
		font-size: 1.5em;
	}
`;

export default Button;