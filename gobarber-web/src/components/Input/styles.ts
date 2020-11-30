import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled.div<ContainerProps>`
	background: #232129;
	color: #666360;
	border: 0.2rem solid #232129;
	border-radius: 1rem;
	padding: 1.6rem;
	width: 100%;
	display: flex;
	align-items: center;
	${props =>
		props.isErrored &&
		css`
			border-color: #c53030;
		`}

	${props =>
		props.isFocused &&
		css`
			color: #ff9000;
			border: 0.2rem solid #ff9000;
		`}

	${props =>
		props.isFilled &&
		css`
			color: #ff9000;
		`}



	input {
		background: #232129;
		border: 0;
		flex: 1;
		color: #666360;
		&::placeholder {
			color: #666360;
		}
	}

	&:not(:last-of-type) {
		margin-bottom: 0.8rem;
	}

	svg {
		margin-right: 1.6rem;
	}
`

export const Error = styled(Tooltip)`
	height: 2rem;
	margin-left: 1.6rem;
	svg {
		margin-right: 0;
	}

	span {
		background: #c53030;
		color: #fff;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`
