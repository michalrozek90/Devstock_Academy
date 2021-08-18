// CONSTANTS
const INCREMENT_PAGE = 'incrementPage'
const DECREMENT_PAGE = 'decrementPage'
const SET_PAGE = 'setPage'

// ACTIONS
export const incrementPage = () => ({
	type: INCREMENT_PAGE,
})

export const decrementPage = () => ({
	type: DECREMENT_PAGE,
})

export const setPage = () => ({
	type: SET_PAGE,
})

const initialState = {
	page: 1,
}

// REDUCER
const counterActions = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_PAGE:
			return { ...state, page: state.page + 1 }
		case DECREMENT_PAGE:
			return { ...state, page: state.page - 1 }
		case SET_PAGE:
			return { ...initialState }
		default:
			return state
	}
}

export default counterActions
