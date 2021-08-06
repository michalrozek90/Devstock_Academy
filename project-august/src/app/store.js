import { combineReducers, createStore, applyMiddleware } from 'redux'
import counterReducer from '../redux/ducks/counter'
import thunk from 'redux-thunk'

const reducers = combineReducers({
	counter: counterReducer,
})

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store
