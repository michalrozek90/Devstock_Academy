import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackbar } from '../redux/ducks/snackbar'
import { addUser } from '../redux/ducks/registration'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const FormContainer = styled.form`
	max-width: 35%;
	display: flex;
	flex-direction: column;
	margin: 2rem auto;
	border: 2px solid black;
`
const Input = styled.input`
	padding: 15px;
	margin: 20px 30px;
	font-size: 1rem;
`

const Error = styled.p`
	color: red;
	font-size: 0.7rem;
	text-align: left;
	margin: 0 30px;
`

const MyButton = styled(Button)`
	margin-top: 30px;
`

const Registration = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ firstName: null, lastName: null, email: null, password: null })
	const [errors, setErrors] = useState({
		firstNameTooShort: false,
		lastNameTooShort: false,
		emailAlreadyExists: false,
		emailTooShort: false,
		emailWrongSyntax: false,
		passwordTooShort: false,
		passwordNeedsOneNumber: false,
	})

	const onSubmitHandler = e => {
		e.preventDefault()

		for (let user of users) {
			if (user.email === data.email) {
				setErrors({ ...errors, emailAlreadyExists: true })
				dispatch(setSnackbar(true, 'error', 'Ten email jest już w użyciu'))
				return
			} else {
				setErrors({ ...errors, emailAlreadyExists: false })
			}
		}

		// if (!passwordIncludesNumber(data.password)) {
		// 	setErrors({ ...errors, passwordNeedsOneNumber: true })
		// 	return
		// } else {
		// 	setErrors({ ...errors, passwordNeedsOneNumber: false })
		// }
		if (
			!errors.firstNameTooShort &&
			!errors.lastNameTooShort &&
			!errors.emailAlreadyExists &&
			!errors.emailTooShort &&
			!errors.emailWrongSyntax &&
			!errors.passwordTooShort &&
			!errors.passwordNeedsOneNumber
		) {
			dispatch(addUser(data))
			dispatch(setSnackbar(true, 'success', 'Zarejestrowano poprawnie!'))
		}
	}

	console.log('Stan : ', users)

	const onChangeFirstNameHandler = e => {
		setData({ ...data, firstName: e.target.value })
		setErrors({ ...errors, firstNameTooShort: e.target.value.length < 3 })
	}

	const onChangeLastNameHandler = e => {
		setData({ ...data, lastName: e.target.value })
		setErrors({ ...errors, lastNameTooShort: e.target.value.length < 3 })
	}
	const onChangeEmailHandler = e => {
		setData({ ...data, email: e.target.value })
		setErrors({ ...errors, emailTooShort: e.target.value.length < 3 })
	}

	const onChangePasswordHandler = e => {
		setData({ ...data, password: e.target.value })
		setErrors({ ...errors, passwordTooShort: e.target.value.length < 6 })
	}

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
				<Input type='text' placeholder='imię' onChange={e => onChangeFirstNameHandler(e)} required />
				{errors.firstNameTooShort && <Error>imię musi posiadać conajmniej 3 znaki</Error>}
				<Input type='text' placeholder='nazwisko' onChange={e => onChangeLastNameHandler(e)} required />
				{errors.lastNameTooShort && <Error>nazwisko musi posiadać conajmniej 3 znaki</Error>}
				<Input type='text' placeholder='e-mail' onChange={e => onChangeEmailHandler(e)} required />
				{errors.emailTooShort && <Error>email za krótki</Error>}
				{errors.emailAlreadyExists && <Error>ten email jest już zajęty</Error>}
				{errors.emailWrongSyntax && <Error>email powinien zawierać znak @ i kończyć się znakami .com</Error>}
				<Input type='text' placeholder='hasło' onChange={e => onChangePasswordHandler(e)} required />
				{errors.passwordTooShort && <Error>hasło powinno posiadać conajmniej 6 znaków</Error>}
				{errors.passwordNeedsOneNumber && <Error>hasło powinno zawierać przynajmniej 1 literę</Error>}
				<MyButton type='submit' variant={'contained'} color={'primary'}>
					Zarejestruj się
				</MyButton>
			</FormContainer>
		</div>
	)
}

export default Registration
