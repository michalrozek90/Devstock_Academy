import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutMe from '../pages/AboutMe'
import Stopwatch from '../pages/Stopwatch'
import Counter from '../pages/Counter'
import CharacterList from '../pages/CharacterList'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

const Routing = () => {
	return (
		<>
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/aboutme' component={AboutMe} />
				<Route path='/stopwatch' component={Stopwatch} />
				<Route path='/counter' component={Counter} />
				<Route path='/character-list' component={CharacterList} />
				<Route path='/login' component={Login} />
				<Route path='/registration' component={Registration} />
			</Switch>
		</>
	)
}

export default Routing
