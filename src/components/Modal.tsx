import React, { ReactChild } from 'react';
import styled from 'styled-components';
import Snackbar from './Snackbar';

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: #00000091;
	z-index: 1200;
	display: flex;
	align-items: center;
	justify-content: center;

`;

const StyledModal = styled.div`
	width: 60%;
	position: relative;
	min-height: 50%;
	max-height: 80%;
	background-color: #3e474c;
	border-radius: 10px;
	z-index: 1200;
`;

interface IProps {
	children: ReactChild | ReactChild[],
	open: boolean,
	message: string,
	showSnackbar: boolean,
}

export default function Modal({ children, open, message, showSnackbar }:IProps):JSX.Element {
	return (
		<Background className={open ? 'open' : ''}>
			<StyledModal className={open ? 'open' : ''}>
				{children}
			</StyledModal>
			<Snackbar message={message} isActive={showSnackbar} />
		</Background>
	);
}