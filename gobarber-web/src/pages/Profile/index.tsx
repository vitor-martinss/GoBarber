/* eslint-disable react/jsx-indent-props */
import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, Content } from './styles'

interface ProfileFormData {
	name: string;
	email: string;
	password: string;
}

const Profile: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	const { addToast } = useToast()
	const history = useHistory()

	// const { signIn } = useContext(AuthContext)
	const handleSubmit = useCallback(
		async (data: ProfileFormData) => {
			try {
				formRef.current?.setErrors({})
				const schema = Yup.object().shape({
					name: Yup.string().required('Nome obrigatório'),
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					password: Yup.string().min(6, 'No mínimo 6 dígitos'),
				})

				await schema.validate(data, {
					abortEarly: false,
				})

				await api.post('/users', data)
				history.push('/')
				addToast({
					type: 'success',
					title: 'Cadastro realizado!',
					description: 'Você já pode fazer seu logon no GoBarber!',
				})
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err)
					formRef.current?.setErrors(errors)
					return
				}

				addToast({
					type: 'success',
					title: 'Erro na autenticação',
					description:
						'Ocorreu um erro ao fazer cadastro, tente novamente.',
				})
			}
		},
		[addToast, history],
	)
	return (
		<Container>
			<Content>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Meu perfil</h1>
					<Input
						name="name"
						icon={FiUser}
						type="text"
						placeholder="Nome"
					/>
					<Input
						name="email"
						icon={FiMail}
						type="email"
						placeholder="E-mail"
					/>
					<Input
						name="old_password"
						icon={FiLock}
						type="password"
						placeholder="Senha atual"
					/>

					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Nova senha"
					/>

					<Input
						name="password_confirmation"
						icon={FiLock}
						type="password"
						placeholder="Confirmar senha"
					/>
					<Button type="submit">Confirmar mudanças</Button>
				</Form>
			</Content>
		</Container>
	)
}
export default Profile
