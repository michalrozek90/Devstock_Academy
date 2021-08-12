import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTime, reset, toggle, setTime, setCount, incrementAmount, selectCount } from '../redux/ducks/stopwatch'
import { useEffect, useState } from 'react'

const Stopwatch = () => {
	const dispatch = useDispatch()

	const active = useSelector(state => state.stopwatch.isActive)
	const startTime = useSelector(state => state.stopwatch.time)

	const [incrementAmount, setIncrementAmount] = useState('1')

	const incrementValue = Number(incrementAmount) || 0

	// const [hour, setHours] = useState(0)
	// const [minute, setMinutes] = useState(0)
	// const [second, setSeconds] = useState(0)
	// const [milSecond, setMilSecond] = useState(0)

	const handleClick = () => {
		dispatch(toggle())
		console.log('toggluję')
	}

	// const onReset = () => {
	// 	setHours(0)
	// 	setMinutes(0)
	// 	setSeconds(0)
	// setMilSecond(0)
	// }

	const onReset = () => {
		dispatch(reset())
		console.log('resetuję')
	}

	// useEffect(() => {
	// 	let interval = null
	// 	if (active) {
	// 		interval = setInterval(() => {
	// 			if (minute > 59) {
	// 				setHours(hour + 1)
	// 				setMinutes(0)
	// 			}
	// 			if (second > 59) {
	// 				setMinutes(minute + 1)
	// 				setSeconds(0)
	// 			}
	// 			if (milSecond >= 99) {
	// 				setSeconds(second + incrementValue)
	// 				setMilSecond(0)
	// 			}
	// 			if (milSecond < 99) {
	// 				setMilSecond(milSecond + 1)
	// 			}
	// 		}, 10)
	// 	}
	// 	return () => {
	// 		clearInterval(interval)
	// 	}
	// }, [handleClick])

	useEffect(() => {
		let interval = null
		if (active) {
			console.log('inside useEffect', startTime)
			interval = setInterval(() => {
				if (startTime.miliSeconds < 99) {
					dispatch(addTime())
				}
			}, 10)
		}
		return () => {
			clearInterval(interval)
		}
	}, [handleClick])

	return (
		<div style={{ textAlign: 'center', marginTop: '25%' }}>
			<h2>
				{/* <span>{hour >= 10 ? hour : '0' + hour} : </span> */}
				{/* <span>{minute >= 10 ? minute : '0' + minute} : </span> */}
				{/* <span>{second >= 10 ? second : '0' + second} : </span> */}
				<span>
					{startTime.miliSeconds >= 10 || startTime.miliSeconds > 100
						? startTime.miliSeconds
						: '0' + startTime.miliSeconds}
				</span>
			</h2>
			<button onClick={handleClick}>{!active ? 'Start' : 'Stop'}</button>
			<button onClick={onReset}>Reset</button>
			<input
				placeholder='Zaginamy czasoprzestrzeń?'
				value={incrementAmount}
				onChange={e => setIncrementAmount(e.target.value)}
			/>
		</div>
	)
}

export default Stopwatch
