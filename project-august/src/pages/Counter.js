import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetCounter } from '../redux/ducks/counter'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const MainContainer = styled.div`
	text-align: center;
	margin-top: 15%;
`

const Result = styled.h2`
	color: green;
`
const MyButton = styled(Button)`
	margin: 1rem;
`

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector(state => state.counter.count)

	return (
		<MainContainer>
			{count % 5 === 0 && count !== 0 ? <Result>{count}</Result> : <h2>{count}</h2>}
			<MyButton variant='outlined' color='primary' onClick={() => dispatch(decrement())}>
				Zmniejsz licznik
			</MyButton>
			<MyButton variant='contained' color='secondary' onClick={() => dispatch(resetCounter())}>
				Resetuj
			</MyButton>
			<MyButton variant='outlined' color='primary' onClick={() => dispatch(increment())}>
				Zwiększ licznik
			</MyButton>
		</MainContainer>
	)
}

export default Counter
