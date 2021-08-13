import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/ducks/counter'

const Counter = () => {
	const count = useSelector(state => state.counter.count)
	const dispatch = useDispatch()

	const Result = styled.h2`
		color: green;
	`

	return (
		<div className='counter' style={{ textAlign: 'center', marginTop: '15%' }}>
			{count % 5 === 0 && count !== 0 ? <Result>{count}</Result> : <h2>{count}</h2>}
			<button onClick={() => dispatch(decrement())}>Zmniejsz licznik</button>
			<button onClick={() => dispatch(reset())}>Resetuj</button>
			<button onClick={() => dispatch(increment())}>Zwiększ licznik</button>
		</div>
	)
}

export default Counter
