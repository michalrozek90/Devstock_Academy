import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { setSnackbar } from '../redux/ducks/snackbar'
import Logo from '../components/Logo'

const FormContainer = styled.form`
	max-width: 30%;
	@media (max-width: 767px) {
		max-width: 80%;
	}

	margin: 50px auto;
	display: flex;
	flex-direction: column;
	border: 2px solid black;
`
const Input = styled.input`
	padding: 20px;
	margin: 10px 20px;
	font-size: 1rem;
`
const CustomButton = styled(Button)`
	margin-top: 30px;
`
const LogoContainer = styled.div`
	text-align: center;
`
const CustomLink = styled(Link)`
	text-decoration: none;
	color: red;
`

const Login = () => {
	let history = useHistory()
	const dispatch = useDispatch()
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ email: null, password: null })
	const { email, password } = data

	const onSubmitHandler = e => {
		e.preventDefault()
		console.log(users)
		if (users.length > 0) {
			for (let user of users) {
				console.log('user email : ', user.email)
				console.log('user password : ', user.password)
				if (user.email === email && user.password === password) {
					dispatch(setSnackbar(true, 'success', 'success', 'Logowanie pomyślne!'))
					history.push('/success-login')
					return
				}
			}
		}
		return dispatch(setSnackbar(true, 'error', 'error', 'Błędny e-mail lub hasło'))
	}

	const onChangeEmailHandler = e => {
		setData({ ...data, email: e.target.value })
	}
	const onChangePasswordHandler = e => {
		setData({ ...data, password: e.target.value })
	}

	return (
		<div>
			<FormContainer onSubmit={onSubmitHandler}>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<Input type='text' placeholder='e-mail' onChange={e => onChangeEmailHandler(e)} required />
				<Input type='password' placeholder='hasło' onChange={e => onChangePasswordHandler(e)} required />
				<CustomButton type='submit' variant={'contained'} color={'primary'}>
					Zaloguj się
				</CustomButton>
			</FormContainer>
			<Typography align='center'>
				Nie masz jeszcze konta? <CustomLink to={'/registration'}>Zarejestruj się</CustomLink>
			</Typography>
		</div>
	)
}

export default Login
