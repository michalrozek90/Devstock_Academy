import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import Routing from './components/Routing'
import Snackbar from './components/Snackbar'

function App() {
	return (
		<>
			<Snackbar />
			<Router>
				<div className='App'>
					<Nav />
					<Routing />
				</div>
			</Router>
		</>
	)
}

export default App
