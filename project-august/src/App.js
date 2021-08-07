import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import CharacterList from './components/CharacterList'
import Counter from './components/Counter'
import Login from './components/Login'
import Registration from './components/Registration'
import Stopwatch from './components/Stopwatch'
import Routing from './components/Routing'

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Routing />
			</div>
		</Router>
	)
}

export default App
