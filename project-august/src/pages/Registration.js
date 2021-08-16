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
	const users = useSelector(state => state.registration.usersDatabase)

	const [data, setData] = useState({ firstName: null, lastName: null, email: null, password: null })

	const onSubmitHandler = e => {
		e.preventDefault()
		// if (
		// 	users.forEach((el, i) => {
		// 		el[i].includes(data.email)
		// 		console.log(`index ${i}, email ${el.email}`)
		// 	})
		// ) {
		// 	alert('Email już istnieje')
		// } else {
		dispatch(addUser(data))
		// }
		// console.log(users[1].email)
		console.log(users)
	}
	return (
		<div>
			<FormContainer onSubmit={onSubmitHandler}>
				<Input
					type='text'
					placeholder='imię'
					onChange={e => setData({ ...data, firstName: e.target.value })}
					required
				/>
				<Input
					type='text'
					placeholder='nazwisko'
					onChange={e => setData({ ...data, lastName: e.target.value })}
					required
				/>
				<Input type='text' placeholder='e-mail' onChange={e => setData({ ...data, email: e.target.value })} required />
				<Input
					type='password'
					placeholder='hasło'
					onChange={e => setData({ ...data, password: e.target.value })}
					required
				/>
				<Button type='submit' variant={'contained'} color={'primary'}>
					Zarejestruj się
				</Button>
			</FormContainer>
		</div>
	)
}

export default Registration
