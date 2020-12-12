import styled from 'styled-components/native'
import {Platform} from 'react-native'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 5% ${Platform.OS === 'android' ? 150 : 40}px;
`

export const Title = styled.Text`
	font-size: 24px;
	color: #f4ede8;
	font-family: 'RobotoSlab-Medium';
	margin: 64px 0 24px;
`
export const BackToSignIn = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
	background: #312e38;
	border-top-width: 1px;
	border-color: #232129;
	padding: 16px 0 ${16 + getBottomSpace()}px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`
export const BackToSignInText = styled.Text`
	color:#fff;
	font-size: 16px;
	font-family: 'RobotoSlab-Regular';
	margin-left: 16px;
`
