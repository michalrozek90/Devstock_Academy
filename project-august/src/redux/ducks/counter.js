// CONSTANTS
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET_COUNTER = 'resetCounter'

// ACTIONS
export const increment = () => ({
	type: INCREMENT,
})

export const decrement = () => ({
	type: DECREMENT,
})

export const resetCounter = () => ({
	type: RESET_COUNTER,
})

const initialState = {
	count: 0,
}

// REDUCER
const counterActions = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		case RESET_COUNTER:
			return { ...initialState }
		default:
			return state
	}
}

export default counterActions
