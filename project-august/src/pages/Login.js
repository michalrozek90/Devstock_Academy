import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackbar } from '../redux/ducks/snackbar'
import Logo from '../components/Logo'

const FormContainer = styled.form`
	max-width: 30%;
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

const Login = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ email: null, password: null })

	const onSubmitHandler = e => {
		e.preventDefault()
		console.log(users)
		for (let user of users) {
			console.log('user email : ', user.email)
			console.log('user password : ', user.password)
			if (user.email !== data.email || data.email === null) {
				dispatch(setSnackbar(true, 'error', 'error', 'Błędny e-mail lub hasło'))
				return
			} else {
				console.log('else')
			}
		}
		dispatch(setSnackbar(true, 'success', 'success', 'Logowanie pomyślne!'))
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
				<MyButton type='submit' variant={'contained'} color={'primary'}>
					Zaloguj się
				</MyButton>
			</FormContainer>
			<Typography align='center'>
				Nie masz jeszcze konta? <MyLink to={'/registration'}>Zarejestruj się</MyLink>
			</Typography>
		</div>
	)
}

export default Login
