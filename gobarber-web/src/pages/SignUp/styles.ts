import styled from 'styled-components'
import { shade } from 'polished'
import signInBackgroundImg from '../../assets/sign-up-background.png'

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

	width: 100%;
	max-width: 70rem;
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
	}

	> a {
		color: #f4ede8;
		display: flex;
		align-items: center;
		margin-top: 2.4rem;
		text-decoration: none;
		transition: color 0.2s;
		svg {
			margin-right: 1.6rem;
		}
		&:hover {
			color: ${shade(0.2, '#f4ede8')};
		}
	}
`

export const Background = styled.div`
	flex: 1;
	background: url(${signInBackgroundImg}) no-repeat center;
	background-size: cover;
`