import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Topic from '../components/Topic'

const Topics = () => {
	let match = useRouteMatch()
	return (
		<div>
			<div>
				<h2>Topics</h2>
				<ul>
					<li>
						<Link to={`${match.url}/components`}>Components</Link>
					</li>
					<li>
						<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route path={`${match.path}/:topicId`}>
					<Topic />
				</Route>
				<Route path={match.path}>
					<h3>Please select a topic</h3>
				</Route>
			</Switch>
		</div>
	)
}

export default Topics
