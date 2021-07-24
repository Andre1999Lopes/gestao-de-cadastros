import styled from 'styled-components';

const StyledInput = styled.input`
	min-width: 20%;
	min-height: 2em;
	font-size: 1.1em;
	margin: 1em 0;
	border: none;
	border-radius: 10px;
	background-color: #e1e1e1;
	outline: none;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&:hover,
	&:focus {
		background-color: #bdbdbd;
	}

	@media (min-width: 3840px) {
		font-size: 1.5em;
	}
`;

export default StyledInput;