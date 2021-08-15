import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetCounter } from '../redux/ducks/counter'

const Result = styled.h2`
	color: green;
`

const Counter = () => {
	const dispatch = useDispatch()
	const count = useSelector(state => state.counter.count)

	return (
		<div className='counter' style={{ textAlign: 'center', marginTop: '15%' }}>
			{count % 5 === 0 && count !== 0 ? <Result>{count}</Result> : <h2>{count}</h2>}
			<button onClick={() => dispatch(decrement())}>Zmniejsz licznik</button>
			<button onClick={() => dispatch(resetCounter())}>Resetuj</button>
			<button onClick={() => dispatch(increment())}>Zwiększ licznik</button>
		</div>
	)
}

export default Counter
