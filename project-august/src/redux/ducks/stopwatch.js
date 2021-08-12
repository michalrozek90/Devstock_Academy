// CONSTANTS
const ADD_TIME = 'addTime'
const RESET = 'reset'
const SET_TIME = 'setTime'
const SET_COUNT = 'setCount'
const INCREMENT_AMOUNT = 'incrementAmount'
const TOGGLE = 'toggle'

// ACTIONS

export const addTime = () => ({
	type: ADD_TIME,
})

export const reset = () => ({
	type: RESET,
})

export const setTime = () => ({
	type: SET_TIME,
})

export const setCount = () => ({
	type: SET_COUNT,
})

export const incrementAmount = () => ({
	type: INCREMENT_AMOUNT,
})

export const toggle = () => ({
	type: TOGGLE,
})

const initialState = {
	time: {
		hours: 1,
		minutes: 3,
		seconds: 5,
		miliSeconds: 0,
	},
	count: 1,
	isActive: false,
}

// REDUCER
const stopwatchActions = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TIME:
			return { ...state, time: state.time.miliSeconds + 1 }
		case RESET:
			return {
				...state,
				count: (state.count = initialState.count),
				time: (state.time = initialState.time),
				isActive: false,
			}
		case SET_TIME:
			return { ...state, time: (state.time = 0) }
		case SET_COUNT:
			return { ...state, count: (state.count = 0) }
		case INCREMENT_AMOUNT:
			return { ...state, count: (state.count += action.payload) }
		case TOGGLE:
			return { ...state, isActive: !state.isActive }
		default:
			return state
	}
}

export default stopwatchActions
