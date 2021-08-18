import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addMiliseconds,
	addSeconds,
	addMinutes,
	addHours,
	resetStopwatch,
	toggle,
	startMiliseconds,
	startSeconds,
	startMinutes,
	startHours,
} from '../redux/ducks/stopwatch'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'

import Title from '../components/Title'
import { stopwatchInputsSetCount, stopwatchInputsSetStart } from '../staticData/stopwatchInputs'

const MainContainer = styled.div`
	transform: translateY(20%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`
const MyInput = styled(TextField)`
	margin: 10px;
	padding: 0 10px;
`
const MyButton = styled(Button)`
	width: 12%;
	margin: 1rem;
`
const ResultContainer = styled.div`
	font-size: 2rem;
	font-weight: bold;
`
const ButtonsContainer = styled.div`
	width: 100%;
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
		dispatch(resetStopwatch())
		console.log('RESETUJĘ')
	}

	const handleCount = e => {
		const { placeholder } = e.target

		let value = e.target.value
		let time = parseInt(value)

		if (placeholder === 'miliSeconds') {
			console.log(`Zmieniam upływ czasu milisekund na ${time}`)
			count.setMiliSeconds = time
		} else if (placeholder === 'seconds') {
			console.log(`Zmieniam upływ czasu sekund na ${time}`)
			count.setSeconds = time
		} else if (placeholder === 'minutes') {
			console.log(`Zmieniam upływ czasu minut na ${time}`)
			count.setMinutes = time
		} else if (placeholder === 'hours') {
			console.log(`Zmieniam upływ czasu godzin na ${time}`)
			count.setHours = time
		}
	}

	const handleStart = e => {
		const { placeholder } = e.target

		let value = e.target.value
		let number = parseInt(value)

		if (e.target.placeholder === 'start miliseconds') {
			dispatch(startMiliseconds(number))
		} else if (placeholder === 'start seconds') {
			dispatch(startSeconds(number))
		} else if (placeholder === 'start minutes') {
			dispatch(startMinutes(number))
		} else if (placeholder === 'start hours') {
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

	const inputsSetCount = stopwatchInputsSetCount.map(item => {
		const { placeholder, type } = item
		return <MyInput placeholder={placeholder} type={type} onChange={handleCount} key={placeholder} />
	})

	const inputsSetStart = stopwatchInputsSetStart.map(item => {
		const { placeholder, type } = item
		return <MyInput placeholder={placeholder} type={type} onChange={handleStart} key={placeholder} />
	})

	return (
		<>
			<Title title={'stoper'} />
			<MainContainer>
				<ResultContainer>
					<span>{hours >= 10 ? hours : '0' + hours} : </span>
					<span>{minutes >= 10 ? minutes : '0' + minutes} : </span>
					<span>{seconds >= 10 ? seconds : '0' + seconds} : </span>
					<span>{miliSeconds >= 10 ? miliSeconds : '0' + miliSeconds}</span>
				</ResultContainer>
				<ButtonsContainer>
					<MyButton variant='contained' color='primary' onClick={handleClick}>
						{!active ? 'Start' : 'Stop'}
					</MyButton>
					<MyButton variant='contained' color='secondary' onClick={onReset}>
						Reset
					</MyButton>
				</ButtonsContainer>
				<div>{inputsSetCount}</div>
				<div>{inputsSetStart}</div>
			</MainContainer>
		</>
	)
}

export default Stopwatch
