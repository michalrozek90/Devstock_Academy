import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/ducks/registration'
import styled from 'styled-components'

const FormContainer = styled.form`
	max-width: 35%;
	display: flex;
	flex-direction: column;
	margin: 10rem auto;
	border: 2px solid black;
	font-size: 0.8rem;
	color: red;
`
const Registration = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ firstName: null, lastName: null, email: null, password: null })
	// const [errors, setErrors] = useState({
	// 	firstNameTooShort: false,
	// 	lastNameTooShort: false,
	// 	emailAlreadyExists: false,
	// 	emailTooShort: false,
	// 	emailWrongSyntax: false,
	// 	passwordNeedsOneNumber: false,
	// })

	const onSubmitHandler = e => {
		e.preventDefault()
		for (let user of users) {
			if (user.email === data.email) {
				alert('podany email jest już w bazie')
				break
			}
		}

		dispatch(addUser(data))
	}

	console.log('Stan : ', users)
	// const onChangeFirstNameHandler = e => {
	// 	setData({ ...data, firstName: e.target.value })
	// 	setErrors({ ...errors, firstNameTooShort: e.target.value.length <= 2 })
	// }

	// const onChangeLastNameHandler = e => {
	// 	setData({ ...data, lastName: e.target.value })
	// 	setErrors({ ...errors, lastNameTooShort: e.target.value.length <= 2 })
	// }
	const onChangeEmailHandler = e => {
		setData({ ...data, email: e.target.value })

		// emailWrongSyntax: e.target.value.indexOf('@') !== -1 && e.target.value.lastIndexOf('.com') !== -1,
	}

	// const onChangePasswordHandler = e => {
	// 	setData({ ...data, password: e.target.value })
	// 	// setErrors({ ...errors, passwordNeedsOneNumber: passwordIncludesNumber })
	// }

	// const passwordIncludesNumber = pass => {
	// 	for (let i = 0; i < pass.length; i++) {
	// 		if (!isNaN(pass[i])) {
	// 			return true
	// 		}
	// 	}
	// 	return false
	// }

	return (
		<div>
			<FormContainer onSubmit={onSubmitHandler}>
				{/* <input type='text' placeholder='imię' onChange={e => onChangeFirstNameHandler(e)} required />
				{errors.firstNameTooShort && <p>imię musi posiadać conajmniej 3 znaki</p>}
				<input type='text' placeholder='nazwisko' onChange={e => onChangeLastNameHandler(e)} required />
				{errors.lastNameTooShort && <p>nazwisko musi posiadać conajmniej 3 znaki</p>} */}
				<input type='text' placeholder='e-mail' onChange={e => onChangeEmailHandler(e)} required />
				{/* {errors.emailAlreadyExists && <p>ten email jest już zajęty</p>}
				{errors.emailTooShort && <p>email za krótki</p>}
				{errors.emailWrongSyntax && <p>email powinien zawierać znak @ i kończyć się znakami .com</p>} */}
				{/* <input type='password' placeholder='hasło' onChange={e => onChangePasswordHandler(e)} required />
				{errors.passwordNeedsOneNumber && <p>hasło powinno zawierać conajmniej jedną cyfrę</p>} */}
				<button type='submit' variant={'contained'} color={'primary'}>
					Zarejestruj się
				</button>
			</FormContainer>
		</div>
	)
}

export default Registration
