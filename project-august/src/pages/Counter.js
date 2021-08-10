import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/ducks/counter'

// const useStyles = makeStyles({})

const Counter = () => {
	// const classes = useStyles()

	const count = useSelector(state => state.counter.count)
	const dispatch = useDispatch()

	const handleClick = ({ target }) => {
		if (target.outerText === 'Zwiększ licznik') {
			dispatch(increment())
		} else if (target.outerText === 'Resetuj') {
			dispatch(reset())
		} else if (target.outerText === 'Zmniejsz licznik') {
			dispatch(decrement())
		}
	}

	return (
		<div className='counter'>
			<h2>licznik: {count}</h2>
			<button onClick={handleClick}>Zmniejsz licznik</button>
			<button onClick={handleClick}>Resetuj</button>
			<button onClick={handleClick}>Zwiększ licznik</button>
		</div>
	)
}

export default Counter
