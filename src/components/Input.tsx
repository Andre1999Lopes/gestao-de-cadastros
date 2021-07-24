import styled from 'styled-components';

const StyledInput = styled.input`
	min-width: 20%;
	min-height: 2em;
	font-size: 16px;
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
`;

export default StyledInput;