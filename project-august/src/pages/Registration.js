import styled from 'styled-components'
import { Button } from '@material-ui/core'

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
	return (
		<div>
			<FormContainer>
				<Input type='text' placeholder='imię' />
				<Input type='text' placeholder='nazwisko' />
				<Input type='text' placeholder='e-mail' />
				<Input type='password' placeholder='hasło' />
				<Button variant={'contained'} color={'primary'}>
					Wyślij
				</Button>
			</FormContainer>
		</div>
	)
}

export default Registration
