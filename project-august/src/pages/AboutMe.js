import React from 'react'
// import { Button, Container, makeStyles } from '@material-ui/core'
import UserInfo from '../components/UserInfo'

// import myImage from '../img/myImage'
const userInfo = [
	{
		firstName: 'Michał',
		lastName: 'Rożek',
		age: '31',
	},
]

const AboutMe = () => {
	return (
		<div>
			siemka!!!!!!!
			<UserInfo />
		</div>
	)
}

export default AboutMe
