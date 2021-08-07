import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from './AboutMe'
import Stopwatch from './Stopwatch'
import Counter from './Counter'
import CharacterList from './CharacterList'
import Login from './Login'
import Registration from './Registration'

const Routing = () => {
	return (
		<>
			<Switch>
				<Route path='/' exact component={AboutMe} />
				<Route path='/stopwatch' exact component={Stopwatch} />
				<Route path='/counter' exact component={Counter} />
				<Route path='/character-list' exact component={CharacterList} />
				<Route path='/login' exact component={Login} />
				<Route path='/registration' exact component={Registration} />
			</Switch>
		</>
	)
}

export default Routing
