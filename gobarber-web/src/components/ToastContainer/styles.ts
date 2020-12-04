import styled, { css } from 'styled-components'

interface ToastProps {
	type?: 'success' | 'error' | 'info';
	hasDescription: boolean;
}

export const Container = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	padding: 3rem;
	overflow: hidden;
`

const toastTypeVariations = {
	info: css`
		background: #ebf8ff;
		color: #3172b7;
	`,

	success: css`
		background: #e6fffa;
		color: #2e656a;
	`,

	error: css`
		background: #fddede;
		color: #c53030;
	`,
}

export const Toast =
	styled.div <
	ToastProps >
	`
	width: 36rem;
	position: relative;
	padding: 1.6rem 3rem 1.6rem 1.6rem;
	border-radius: 1rem;
	box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
	display: flex;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	${props => toastTypeVariations[props.type || 'info']}
	> svg {
		margin: 0.4rem 1.2rem 0 0;
	}

	div {
		flex: 1;

		p {
			margin-top: 0.4rem;
			font-size: 1.4rem;
			opacity: 0.8;
			line-height: 2rem;
		}
	}

	button {
		position: absolute;
		right: 0.8rem;
		top: 1.9rem;
		opacity: 0.6;
		border: 0;
		background: transparent;
		color: inherit;
	}

	${props =>
		!props.hasDescription &&
		css`
			alignt-items: center;

			svg {
				margin-top: 0;
			}
		`}
`
