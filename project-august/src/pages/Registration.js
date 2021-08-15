import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { addUser } from '../redux/ducks/registration'
import { useState } from 'react'

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

const Registration = () => {
	const dispatch = useDispatch()
	const database = useSelector(state => state.registration.usersDatabase)

	const [name, setName] = useState(null)

	const onSubmitHandler = e => {
		e.preventDefault()
		dispatch(addUser(name))
		console.log(database)
		setName(null)
	}

	return (
		<div>
			<FormContainer onSubmit={onSubmitHandler}>
				<Input type='text' placeholder='imię' onChange={e => setName(e.target.value)} />
				<Button type='submit' variant={'contained'} color={'primary'}>
					Zarejestruj się
				</Button>
			</FormContainer>
		</div>
	)
}

export default Registration
