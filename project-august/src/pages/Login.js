import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const FormContainer = styled.form`
	max-width: 30%;
	margin: 10% auto;
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

const Login = () => {
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ email: null, password: null })

	const onSubmitHandler = e => {
		e.preventDefault()
		console.log('logowanie')
	}

	const onChangeEmailHandler = e => {
		setData({ ...data, email: e.target.value })
	}
	const onChangePasswordHandler = e => {
		setData({ ...data, email: e.target.value })
	}

	return (
		<div>
			<FormContainer onSubmit={onSubmitHandler}>
				<Input type='text' placeholder='e-mail' onChange={e => onChangeEmailHandler(e)} required />
				<Input type='password' placeholder='hasło' onChange={e => onChangePasswordHandler(e)} required />
				<MyButton type='submit' variant={'contained'} color={'primary'}>
					Zaloguj się
				</MyButton>
			</FormContainer>
		</div>
	)
}

export default Login
