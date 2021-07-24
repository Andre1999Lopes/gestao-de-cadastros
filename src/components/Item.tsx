import styled from 'styled-components';

const Item = styled.div`
	border-bottom: 1px solid #00000088;
	display: flex;
	align-items: center;

	& p {
		width: 10%;
		font-size: 90%;
		display: inline-block;
		margin-right: 25%;
	}
`;

export default Item;