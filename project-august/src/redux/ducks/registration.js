// CONSTANTS
const ADD_USER = 'addUser'

// ACTIONS
export const addUser = user => ({
	type: ADD_USER,
	payload: user,
})

const initialState = {
	usersDatabase: ['Ewa'],
}

// REDUCER
const registrationActions = (state = initialState, action) => {
	console.log('payload : ', action.payload)
	switch (action.type) {
		case ADD_USER:
			return { ...state, usersDatabase: state.usersDatabase.push(action.payload) }
		default:
			return state
	}
}

export default registrationActions
