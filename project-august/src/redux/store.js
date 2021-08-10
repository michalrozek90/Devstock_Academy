import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from '../redux/ducks/counter'

const reducers = combineReducers({
	counter: counterReducer,
})

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store
