import React from 'react'
import GlobalStyle from './styles/global'
// import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'

import ToastContainer from './components/ToastContainer'
import { AuthProvider } from './hooks/AuthContext'

const App: React.FC = () => (
	<>
		<AuthProvider>
			<SignIn />
		</AuthProvider>

		<ToastContainer />

		<GlobalStyle />
	</>
)

export default App
