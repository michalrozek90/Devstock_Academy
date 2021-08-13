import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
	addMiliseconds,
	addSeconds,
	addMinutes,
	addHours,
	reset,
	toggle,
	startMiliseconds,
	startSeconds,
	startMinutes,
	startHours,
} from '../redux/ducks/stopwatch'
import { TextField } from '@material-ui/core'

const Stopwatch = () => {
	const dispatch = useDispatch()

	const count = useSelector(state => state.stopwatch.count)
	const active = useSelector(state => state.stopwatch.isActive)
	const startTime = useSelector(state => state.stopwatch.time)

	let { miliSeconds, seconds, minutes, hours } = startTime

	const handleClick = () => {
		dispatch(toggle())
	}

	const onReset = () => {
		dispatch(reset())
	}

	const handleCount = e => {
		let value = e.target.value
		let time = parseInt(value)

		if (e.target.placeholder === 'miliseconds') {
			console.log('MILISEKUNDY')
			count.setMiliSeconds = time
		} else if (e.target.placeholder === 'seconds') {
			console.log('SEKUNDY')
			count.setSeconds = time
		} else if (e.target.placeholder === 'minutes') {
			console.log('MINUTY')
			count.setMinutes = time
		} else if (e.target.placeholder === 'hours') {
			console.log('GODZINY')
			count.setHours = time
		}
	}

	const handleStart = e => {
		console.log(e.target.value)
		dispatch(startMiliseconds(e.target.value))
	}

	useEffect(() => {
		let interval = null
		if (active) {
			interval = setInterval(() => {
				if (minutes > 59) {
					dispatch(addHours())
				} else if (seconds > 59) {
					dispatch(addMinutes())
				} else if (miliSeconds >= 99) {
					dispatch(addSeconds())
				} else if (miliSeconds < 99) {
					dispatch(addMiliseconds())
				}
			}, 10)
		}
		return () => {
			clearInterval(interval)
		}
	})

	return (
		<div style={{ textAlign: 'center', marginTop: '15%' }}>
			<h2>
				<span>{hours >= 10 ? hours : '0' + hours} : </span>
				<span>{minutes >= 10 ? minutes : '0' + minutes} : </span>
				<span>{seconds >= 10 ? seconds : '0' + seconds} : </span>
				<span>{miliSeconds >= 10 || miliSeconds > 100 ? miliSeconds : '0' + miliSeconds}</span>
			</h2>
			<button onClick={handleClick}>{!active ? 'Start' : 'Stop'}</button>
			<button onClick={onReset}>Reset</button>
			<input type='number' placeholder='hours' onChange={handleCount} />
			<input type='number' placeholder='minutes' onChange={handleCount} />
			<input type='number' placeholder='seconds' onChange={handleCount} />
			<input type='number' placeholder='miliseconds' onChange={handleCount} />
			<br />
			{/* <TextField
				placeholder='start hours'
				type='number'
				onChange={e => dispatch(startHours(e.target.value))}></TextField>
			<TextField
				placeholder='start minutes'
				type='number'
				onChange={e => dispatch(startMinutes(e.target.value))}></TextField>
			<TextField
				placeholder='start seconds'
				type='number'
				onChange={e => dispatch(startSeconds(e.target.value))}></TextField> */}
			<TextField placeholder='start miliseconds' type='number' onChange={handleStart}></TextField>
		</div>
	)
}

export default Stopwatch