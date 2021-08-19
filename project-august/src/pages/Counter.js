import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetCounter } from '../redux/ducks/counter'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

import Title from '../components/Title'

const MainContainer = styled.div`
	text-align: center;
	transform: translateY(20%);
`

const Result = styled.h2`
	color: green;
`
const CustomButton = styled(Button)`
	margin: 1rem;
`

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector(state => state.counter.count)

	return (
		<>
			<Title title='Licznik'>Licznik</Title>
			<MainContainer>
				{count % 5 === 0 && count !== 0 ? <Result>{count}</Result> : <h2>{count}</h2>}
				<CustomButton variant='outlined' color='primary' onClick={() => dispatch(decrement())}>
					Zmniejsz licznik
				</CustomButton>
				<CustomButton variant='contained' color='secondary' onClick={() => dispatch(resetCounter())}>
					Resetuj
				</CustomButton>
				<CustomButton variant='outlined' color='primary' onClick={() => dispatch(increment())}>
					Zwiększ licznik
				</CustomButton>
			</MainContainer>
		</>
	)
}

export default Counter
