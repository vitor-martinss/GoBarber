import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;

	width: 100%;
	padding: 0 5%;

	@media (min-width: 768px) {
		padding: 0;
	}
	@media (min-width: 1040px) {
		max-width: 50%;
	}

	form {
		margin: 0.8rem 0;
		max-width: 34rem;
		text-align: center;

		h1 {
			margin-bottom: 2.4rem;
			font-size: 2rem;
			text-align: left;
		}

		a {
			color: #f4ede8;
			display: block;
			margin-top: 2.4rem;
			text-decoration: none;
			transition: color 0.2s;
			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}

		input[name='old-password'] {
			margin-top: 2.6rem;
		}
	}
`
