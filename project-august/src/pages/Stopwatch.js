import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'
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
import { Button, TextField } from '@material-ui/core'

const MyInput = styled(TextField)`
	margin: 10px;
	width: 10%;
	text-align: center;
	padding: 0 10px;
`

const MyButton = styled(Button)`
	margin: 20px;
`

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
		console.log('RESETUJĘ')
	}

	const handleCount = e => {
		let value = e.target.value
		let time = parseInt(value)

		if (e.target.placeholder === 'miliseconds') {
			console.log(`Zmieniam upływ czasu milisekund na ${time}`)
			count.setMiliSeconds = time
		} else if (e.target.placeholder === 'seconds') {
			console.log(`Zmieniam upływ czasu sekund na ${time}`)
			count.setSeconds = time
		} else if (e.target.placeholder === 'minutes') {
			console.log(`Zmieniam upływ czasu minut na ${time}`)
			count.setMinutes = time
		} else if (e.target.placeholder === 'hours') {
			console.log(`Zmieniam upływ czasu godzin na ${time}`)
			count.setHours = time
		}
	}

	const handleStart = e => {
		let value = e.target.value
		let number = parseInt(value)

		if (e.target.placeholder === 'start miliseconds') {
			dispatch(startMiliseconds(number))
		} else if (e.target.placeholder === 'start seconds') {
			dispatch(startSeconds(number))
		} else if (e.target.placeholder === 'start minutes') {
			dispatch(startMinutes(number))
		} else if (e.target.placeholder === 'start hours') {
			dispatch(startHours(number))
		}

		console.log('USTAWIAM STAN POCZĄTKOWY NA : ', startTime)
	}

	useEffect(() => {
		let interval = null
		if (active) {
			interval = setInterval(() => {
				if (minutes > 59) {
					dispatch(addHours())
				} else if (seconds > 59) {
					dispatch(addMinutes())
				} else if (miliSeconds > 99) {
					dispatch(addSeconds(miliSeconds - 100))
				} else if (miliSeconds < 100) {
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
				<span>{miliSeconds >= 10 ? miliSeconds : '0' + miliSeconds}</span>
			</h2>
			<MyButton variant='contained' color='primary' onClick={handleClick}>
				{!active ? 'Start' : 'Stop'}
			</MyButton>
			<MyButton variant='contained' color='secondary' onClick={onReset}>
				Reset
			</MyButton>
			<br />
			<MyInput type='number' placeholder='hours' onChange={handleCount} />
			<MyInput type='number' placeholder='minutes' onChange={handleCount} />
			<MyInput type='number' placeholder='seconds' onChange={handleCount} />
			<MyInput type='number' placeholder='miliseconds' onChange={handleCount} />
			<br />
			<MyInput placeholder='start hours' type='number' onChange={handleStart}></MyInput>
			<MyInput placeholder='start minutes' type='number' onChange={handleStart}></MyInput>
			<MyInput placeholder='start seconds' type='number' onChange={handleStart}></MyInput>
			<MyInput placeholder='start miliseconds' type='number' onChange={handleStart}></MyInput>
		</div>
	)
}

export default Stopwatch
