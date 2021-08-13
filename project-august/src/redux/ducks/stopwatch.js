// CONSTANTS
const ADD_MILISECONDS = 'addMiliseconds'
const ADD_SECONDS = 'addSeconds'
const ADD_MINUTES = 'addMinutes'
const ADD_HOURS = 'addHours'
const START_MILISECONDS = 'startMiliseconds'
const START_SECONDS = 'startSeconds'
const START_MINUTES = 'startMinutes'
const START_HOURS = 'startHours'
const RESET = 'reset'
const TOGGLE = 'toggle'

// ACTIONS
export const addMiliseconds = () => ({
	type: ADD_MILISECONDS,
})

export const addSeconds = () => ({
	type: ADD_SECONDS,
})

export const addMinutes = () => ({
	type: ADD_MINUTES,
})

export const addHours = () => ({
	type: ADD_HOURS,
})

export const startMiliseconds = amount => {
	return dispatch => {
		dispatch({
			type: START_MILISECONDS,
			payload: amount,
		})
	}
}

export const startSeconds = amount => {
	return dispatch => {
		dispatch({
			type: START_SECONDS,
			payload: amount,
		})
	}
}

export const startMinutes = amount => {
	return dispatch => {
		dispatch({
			type: START_MINUTES,
			payload: amount,
		})
	}
}

export const startHours = amount => {
	return dispatch => {
		dispatch({
			type: START_HOURS,
			payload: amount,
		})
	}
}

export const reset = () => ({
	type: RESET,
})

export const toggle = () => ({
	type: TOGGLE,
})

const initialState = {
	time: {
		hours: 0,
		minutes: 0,
		seconds: 0,
		miliSeconds: 0,
	},
	count: {
		setHours: 1,
		setMinutes: 1,
		setSeconds: 1,
		setMiliSeconds: 1,
	},
	isActive: false,
}

// REDUCER
const stopwatchActions = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MILISECONDS:
			return { ...state, time: { ...state.time, miliSeconds: state.time.miliSeconds + 1 } }

		case ADD_SECONDS:
			return {
				...state,
				time: {
					...state.time,
					seconds: state.time.seconds + state.count.setSeconds,
					miliSeconds: 0,
				},
			}

		case ADD_MINUTES:
			return {
				...state,
				time: {
					...state.time,
					minutes: state.time.minutes + 1,
					seconds: 0,
				},
			}

		case ADD_HOURS:
			return {
				...state,
				time: {
					...state.time,
					hours: state.time.hours + 1,
					minutes: 0,
				},
			}

		case START_MILISECONDS:
			return {
				...state,
				time: {
					...state.time,
					miliSeconds: (state.time.miliSeconds = action.payload),
				},
			}

		case START_SECONDS:
			return {
				...state,
				time: {
					...state.time,
					seconds: (state.time.seconds = action.payload),
				},
			}

		case START_MINUTES:
			return {
				...state,
				time: {
					...state.time,
					minutes: (state.time.minutes = action.payload),
				},
			}

		case START_HOURS:
			return {
				...state,
				time: {
					...state.time,
					hours: (state.time.hours = action.payload),
				},
			}

		case RESET:
			return {
				...initialState,
				time: {
					miliSeconds: 0,
					seconds: 0,
					minutes: 0,
					hours: 0,
				},
			}

		case TOGGLE:
			return { ...state, isActive: !state.isActive }
		default:
			return state
	}
}

export default stopwatchActions
