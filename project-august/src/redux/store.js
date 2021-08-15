import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from '../redux/ducks/counter'
import stopwatch from '../redux/ducks/stopwatch'
import registration from '../redux/ducks/registration'

const reducers = combineReducers({
	counter,
	stopwatch,
	registration,
})

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store
