import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from '../redux/ducks/counter'
import stopwatch from '../redux/ducks/stopwatch'

const reducers = combineReducers({
	counter,
	stopwatch,
})

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store
