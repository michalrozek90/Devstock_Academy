// CONSTANTS
const SET_SNACKBAR = 'setSnackbar'

// ACTIONS
export const setSnackbar = (snackbarOpen, snackbarType = 'success', snackbarMessage = '') => ({
	type: SET_SNACKBAR,
	snackbarOpen,
	snackbarType,
	snackbarMessage,
})

const initialState = {
	snackbarOpen: false,
	snackbarType: 'success',
	snackbarMessage: '',
}

// REDUCERS
const snackbarActions = (state = initialState, action) => {
	switch (action.type) {
		case SET_SNACKBAR:
			const { snackbarOpen, snackbarType, snackbarMessage } = action
			return {
				...state,
				snackbarOpen,
				snackbarType,
				snackbarMessage,
			}
		default:
			return state
	}
}

export default snackbarActions
