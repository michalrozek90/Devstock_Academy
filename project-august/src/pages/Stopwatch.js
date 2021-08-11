import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTime, reset, setTime, setCount, toggle } from '../redux/ducks/stopwatch'
import { useEffect, useState } from 'react'

const Stopwatch = () => {
	const [hour, setHours] = useState(0)
	const [minute, setMinutes] = useState(0)
	const [second, setSeconds] = useState(0)
	const [milSecond, setMilSecond] = useState(0)
	const [stop, setStop] = useState(true)

	const onStart = () => {
		setStop(false)
		// setMilSecond(milSecond + 1)
	}

	const onStop = () => {
		setStop(true)
	}

	const onReset = () => {
		setHours(0)
		setMinutes(0)
		setSeconds(0)
		setMilSecond(0)
		setStop(true)
	}

	useEffect(() => {
		let interval = null
		if (!stop) {
			interval = setInterval(() => {
				if (minute > 59) {
					setHours(hour + 1)
					setMinutes(0)
					clearInterval(interval)
				}
				if (second > 59) {
					setMinutes(minute + 1)
					setSeconds(0)
					clearInterval(interval)
				}
				if (milSecond > 99) {
					setSeconds(second + 1)
					setMilSecond(0)
					clearInterval(interval)
				}
				if (milSecond <= 99) {
					setMilSecond(milSecond + 1)
					// clearInterval(interval)
				}
			}, 10)
		} else {
			clearInterval(interval)
		}
		return () => {
			clearInterval(interval)
		}
	})
	return (
		<div style={{ textAlign: 'center', marginTop: '25%' }}>
			<h2>
				{hour} : {minute} : {second} : {milSecond}
			</h2>
			<button onClick={onStart}>Start</button>
			<button onClick={onStop}>Stop</button>
			<button onClick={onReset}>Reset</button>
		</div>
	)
}

export default Stopwatch
