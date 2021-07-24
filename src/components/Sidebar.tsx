import React from 'react';
import styled from 'styled-components';
import { Screen } from '../App';
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';

const Aside = styled.aside`
	width: 15%;
	height: 100vh;
	position: absolute;
	left: 0;
	color: white;
	background-color: #003b56;
`;

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	margin-top: 3em;
	border-top: #ffffff66 1px solid;

	& li {
		text-align: center;
		font-size: 150%;
		width: 100%;
		font-weight: 400;
		padding-top: .5em;
		padding-bottom: .5em;
		border-bottom: #ffffff66 1px solid;
		background-color: #156c6c;
		transition: background-color 100ms linear;

		&:hover {
			background-color: #02ba9e;
			cursor: pointer;
		}

		& span {
			user-select: none;
		}
	}
`;

const A = styled.a`
	text-decoration: none;
	 & img {
		 width: 30%;
	 }
`;

interface IProps {
	handleClick: (screen: Screen) => void
}

export default function Sidebar({ handleClick }:IProps):JSX.Element {
	return (
		<Aside>
			<Ul>
				<li onClick={() => handleClick(Screen.PRODUCTS)}>
					<span>
						Produtos
					</span>
				</li>
				<li onClick={() => handleClick(Screen.CLIENTS)}>
					<span>
						Clientes
					</span>
				</li>
			</Ul>
			<Ul style={{
				position: 'absolute',
				bottom: 0,
				width: '100%',
				borderTop: '1px solid #ffffff66',
				flexDirection: 'row'
			}}>
				<li style={{
					borderBottom: 'none'
				}}>
					<A href='https://github.com/Andre1999Lopes' target='_blank' >
						<img src={github} />
					</A>
				</li>
				<li style={{
					borderBottom: 'none',
				}}>
					<A href='https://linkedin.com/in/andré-lopes-08' target='_blank'>
						<img src={linkedin} />
					</A>
				</li>
			</Ul>
		</Aside>
	);
}