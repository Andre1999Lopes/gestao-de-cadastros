import styled from 'styled-components';

const Button = styled.p`
	display: inline-block;
	font-size: 1rem;
	margin-right: 5%;
	border-radius: 10px;
	font-family: 'Quicksand';
	background-color: #156c6c;
	color: white;
	padding: 1em;
	border: none;
	transition: background-color 100ms linear;
	user-select: none;
	
	&:hover {
		background-color: #02ba9e;
		cursor: pointer;
	}
`;

export default Button;