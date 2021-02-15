import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
	> header {
		height: 14.4rem;
		background: #28262e;
		display: flex;
		align-items: center;

		div {
			width: 100%;
			max-width: 90%;
			margin: 0 auto;

			@media (min-width: 1920px) {
				max-width: 90rem;
			}

			svg {
				color: #999591;
				width: 2.4rem;
				height: 2.4rem;
			}
		}
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: -9rem auto 0;
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

		> :nth-child(3) {
			margin-bottom: 2.6rem;
		}
	}
`

export const AvatarInput = styled.div`
	margin-bottom: 3.2rem;
	width: 18.6rem;
	margin-left: auto;
	margin-right: auto;
	position: relative;

	img {
		width: 18.6rem;
		height: 18.6rem;
		border-radius: 50%;
		object-fit: cover;
	}

	label {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 50%;
		background: #ff9000;
		border: 0;
		transition: background-color 0.2s;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			width: 2rem;
			height: 2rem;
			color: #312e38;
		}

		input {
			display: none;
		}
	}
`
