import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'

import Nav from './components/Nav'
import Routing from './components/Routing'
import Snackbar from './components/Snackbar'

const theme = createTheme({
	// palette: {
	// 	type: darkMode ? 'dark' : 'light',
	// },
	typography: {
		fontFamily: 'Patrick Hand, Arial, sans-serif',
	},
})

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Snackbar />
				<Router>
					<div className='App'>
						<Nav />
						<Routing />
					</div>
				</Router>
			</ThemeProvider>
		</>
	)
}

export default App
