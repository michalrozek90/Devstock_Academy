const hours = 'hours'
const minutes = 'minutes'
const seconds = 'seconds'
const miliSeconds = 'miliSeconds'

const startHours = 'start hours'
const startMinutes = 'start minutes'
const startSeconds = 'start seconds'
const startMiliSeconds = 'start miliseconds'

const stopwatchInputsSetCount = [
	{ placeholder: hours, type: 'number', onChange: '{handleCount}' },
	{ placeholder: minutes, type: 'number', onChange: '{handleCount}' },
	{ placeholder: seconds, type: 'number', onChange: '{handleCount}' },
	{ placeholder: miliSeconds, type: 'number', onChange: '{handleCount}' },
]

const stopwatchInputsSetStart = [
	{ placeholder: startHours, type: 'number', onChange: '{handleStart}' },
	{ placeholder: startMinutes, type: 'number', onChange: '{handleStart}' },
	{ placeholder: startSeconds, type: 'number', onChange: '{handleStart}' },
	{ placeholder: startMiliSeconds, type: 'number', onChange: '{handleStart}' },
]

export { stopwatchInputsSetCount, stopwatchInputsSetStart }
