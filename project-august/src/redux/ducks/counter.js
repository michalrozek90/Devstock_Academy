// CONSTANTS
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'
const ADD_USER = 'addUser'

// ACTIONS
export const addUser = user => ({
	type: ADD_USER,
	user: user,
})

export const increment = () => ({
	type: INCREMENT,
})

export const decrement = () => ({
	type: DECREMENT,
})

export const reset = () => ({
	type: RESET,
})

const initialState = {
	usersDatabase: [],
	count: 0,
	isLoading: false,
}

// REDUCER
const counterActions = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, usersDatabase: state.usersDatabase.push(action.user) }
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		case RESET:
			return { ...state, count: (state.count = initialState.count), isLoading: true }
		default:
			return state
	}
}

export default counterActions
