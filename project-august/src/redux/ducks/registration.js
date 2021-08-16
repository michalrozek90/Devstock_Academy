// CONSTANTS
const ADD_USER = 'addUser'

// ACTIONS
export const addUser = user => ({
	type: ADD_USER,
	payload: user,
})

const initialState = {
	usersDatabase: [
		{
			firstName: 'Ewa',
			lastName: 'Nowak',
			email: 'ewa@nowak.pl',
			password: '1234',
		},
	],
}

// REDUCER
const registrationActions = (state = initialState, action) => {
	// console.log(state)
	switch (action.type) {
		case ADD_USER:
			return { ...state, usersDatabase: [...state.usersDatabase, action.payload] }
		default:
			return state
	}
}

export default registrationActions
