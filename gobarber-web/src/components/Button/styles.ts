import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
	background: #ff9000;
	border-radius: 1rem;
	color: #312e38;
	padding: 1.6rem;
	width: 100%;
	font-weight: 500;
	margin-top: 1.6rem;
	transition: background-color 0.2s;
	font-size: 1.4rem;

	&:hover {
		background: ${shade(0.2, '#ff9000')};
	}
`
