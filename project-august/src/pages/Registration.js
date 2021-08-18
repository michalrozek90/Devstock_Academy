import { useState } from 'react'
import { Link, Prompt } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackbar } from '../redux/ducks/snackbar'
import { addUser } from '../redux/ducks/registration'
import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core'

import Logo from '../components/Logo'

const FormContainer = styled.form`
	max-width: 30%;
	display: flex;
	flex-direction: column;
	margin: 2rem auto;
	border: 2px solid black;
`
const Input = styled.input`
	padding: 15px;
	margin: 20px 30px 5px 30px;
	font-size: 1rem;
`
const Error = styled.p`
	color: red;
	font-size: 0.6rem;
	text-align: left;
	margin: 0px 30px;
`
const MyButton = styled(Button)`
	margin-top: 30px;
`
const LogoContainer = styled.div`
	text-align: center;
`
const MyLink = styled(Link)`
	text-decoration: none;
	color: red;
`

const Registration = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ firstName: null, lastName: null, email: null, password: null })

	const { firstName, lastName, email, password } = data

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
			if (user.email === email) {
				setErrors({ ...errors, emailAlreadyExists: true })
				return dispatch(setSnackbar(true, 'error', 'error', 'Wprowadź inny adres e-mail'))
			}
		}
		setErrors({ ...errors, emailAlreadyExists: false })

		if (!passwordIncludesNumber(password)) {
			setErrors({ ...errors, passwordNeedsOneNumber: true })
			return
		}
		setErrors({ ...errors, passwordNeedsOneNumber: false })
		if (
			!errors.firstNameTooShort &&
			!errors.lastNameTooShort &&
			!errors.emailTooShort &&
			!errors.emailWrongSyntax &&
			!errors.passwordTooShort
		) {
			dispatch(addUser(data))
			dispatch(setSnackbar(true, 'success', 'success', 'Zarejestrowano poprawnie!'))
		}
	}

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
		setErrors({
			...errors,
			emailTooShort: e.target.value.length < 3,
			emailAlreadyExists: false,
			emailWrongSyntax:
				e.target.value.indexOf('@') === -1 ||
				(e.target.value.lastIndexOf('.com') === -1 && e.target.value.lastIndexOf('.pl') === -1),
		})
	}

	const onChangePasswordHandler = e => {
		setData({ ...data, password: e.target.value })
		setErrors({
			...errors,
			passwordTooShort: e.target.value.length < 6,
			passwordNeedsOneNumber: !passwordIncludesNumber(e.target.value),
		})
	}

	const passwordIncludesNumber = pass => {
		for (let i = 0; i < pass.length; i++) {
			if (!isNaN(pass[i])) {
				return true
			}
		}
		return false
	}

	return (
		<div>
			<FormContainer onSubmit={onSubmitHandler}>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<Input type='text' placeholder='imię' onChange={e => onChangeFirstNameHandler(e)} required />
				{errors.firstNameTooShort && <Error>imię musi posiadać co najmniej 3 znaki</Error>}
				<Input type='text' placeholder='nazwisko' onChange={e => onChangeLastNameHandler(e)} required />
				{errors.lastNameTooShort && <Error>nazwisko musi posiadać co najmniej 3 znaki</Error>}
				<Input type='text' placeholder='e-mail' onChange={e => onChangeEmailHandler(e)} required />
				{errors.emailTooShort && <Error>email za krótki</Error>}
				{errors.emailAlreadyExists && <Error>ten email jest już zajęty</Error>}
				{errors.emailWrongSyntax && <Error>email powinien zawierać znak @ i kończyć się znakami .com lub .pl</Error>}
				<Input type='text' placeholder='hasło' onChange={e => onChangePasswordHandler(e)} required />
				{errors.passwordTooShort && <Error>hasło powinno posiadać co najmniej 6 znaków</Error>}
				{errors.passwordNeedsOneNumber && <Error>hasło powinno zawierać przynajmniej 1 cyfrę</Error>}
				<MyButton type='submit' variant={'contained'} color={'primary'}>
					Zarejestruj się
				</MyButton>
				<Prompt
					when={!!firstName || !!lastName || !!email || !!password}
					message='Niektórze pola formularza są wypełnione. Jeśli przejdziesz dalej, utracisz te dane. Czy kontynuować?'
				/>
			</FormContainer>
			<Typography align='center'>
				Masz już konto? <MyLink to={'/login'}>Zaloguj się</MyLink>
			</Typography>
		</div>
	)
}

export default Registration
