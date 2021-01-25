import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from '@react-native-community/datetimepicker'
import {
	Container,
	Header,
	BackButton,
	HeaderTitle,
	UserAvatar,
	ProvidersListContainer,
	ProvidersList,
	ProviderContainer,
	ProviderAvatar,
	ProviderName,
	Calendar,
	Title,
	OpenDatePickerButton,
	OpenDatePickerButtonText
} from './styles'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'
import { Platform } from 'react-native'

interface RouteParams {
	providerId: string;
}

export interface Provider {
	id: string;
	name: string;
	avatar_url: string;
}

const CreateAppointment: React.FC = () => {
	const { user } = useAuth()
	const route = useRoute()
	const {goBack} = useNavigation()

	const routeParams = route.params as RouteParams;

	const [showDatePicker, setShowDatePicker] = useState(false)

	const [selectedDate, setSelectedDate] = useState(new Date())

	const [providers, setProviders] = useState<Provider[]>([])
	const [selectedProvider, setSelectedProvider] = useState(routeParams.providerId)

	useEffect(() => {
		api.get('providers').then(response => {
			setProviders(response.data)
		}, (error) => {
			console.log(error)
		})
	}, [])

	const navigateBack = useCallback(() => {
		goBack()
	}, [goBack])

	const handleSelectrovider = useCallback((providerId: string) => {
		setSelectedProvider(providerId)
	}, [])

	const handleToggleDatePicker =  useCallback(() => {
		setShowDatePicker(state => !state)
	}, [])

	const handleDateChanged =  useCallback((event: any, date: Date | undefined) => {
		if (Platform.OS === 'android') {
			setShowDatePicker(false)
		}

		if (date) {
			setSelectedDate(date)
		}
	}, [])

	return (
		<Container>
			<Header>
				<BackButton onPress={navigateBack}>
					<Icon name='chevron-left' size={24} color='#999591' />
				</BackButton>
				<HeaderTitle>Cabeleireiros</HeaderTitle>

				<UserAvatar source={{uri: user.avatar_url}} />
			</Header>
			<ProvidersListContainer>
				<ProvidersList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={providers}
					keyExtractor={(provider) => provider.id}
					renderItem={({item: provider}) => (
						<ProviderContainer
							onPress={() => handleSelectrovider(provider.id)}
							selected={provider.id === selectedProvider}
						>
							<ProviderAvatar source={provider.avatar_url ? {uri: provider.avatar_url} : {uri: 'https://i.pravatar.cc/300'} } />
							<ProviderName selected={provider.id === selectedProvider}>{provider.name}</ProviderName>
						</ProviderContainer>
					)}
				/>
			</ProvidersListContainer>
				<Calendar>
					<Title>Esolha a data</Title>
					<OpenDatePickerButton onPress={handleToggleDatePicker}>
						<OpenDatePickerButtonText>Selecionar outra data</OpenDatePickerButtonText>
					</OpenDatePickerButton>

					{showDatePicker && (
						<DateTimePicker
							mode="date"
							onChange={handleDateChanged}
							value={selectedDate}
							display="calendar"
							//textColor='f4ede8'
						/>
					)}

				</Calendar>


		</Container>
	)
}

export default CreateAppointment
