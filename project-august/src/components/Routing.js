import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import AboutMe from './AboutMe'
import Stopwatch from './Stopwatch'
import Counter from './Counter'
import CharacterList from './CharacterList'
import Login from './Login'
import Registration from './Registration'

const Routing = () => {
	return (
		<>
			<Route path='/' exact component={AboutMe} />
			<Route path='/stopwatch' exact component={Stopwatch} />
			<Route path='/counter' exact component={Counter} />
			<Route path='/character-list' exact component={CharacterList} />
			<Route path='/login' exact component={Login} />
			<Route path='/registration' exact component={Registration} />
		</>
	)
}

export default Routing
