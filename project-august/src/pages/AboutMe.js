import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import userImage from '../img/userImage.png'

const SectionContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 92.65vh;
	width: 100%;
	color: white;
	background: radial-gradient(at top right, #333333 20%, #000000 70%);
`

const ImgContainer = styled.div`
	height: 75%;
	width: 55%;
	border-radius: 50%;
	background-image: url(${userImage});
	background-size: 60%;
	background-position: center;
	background-repeat: no-repeat;
`
const TxtContainer = styled.div`
	position: relative;
	max-width: 40%;
	height: 70%;
	padding: 40px;
`

const TypographySignature = styled(Typography)`
	position: absolute;
	top: 75%;
	padding: 40px;
`

const AboutMe = ({ userInfo }) => {
	const { firstName, lastName, age } = userInfo

	const userSignature = `${firstName} ${lastName}, ${age} lat`

	return (
		<SectionContainer>
			<ImgContainer />
			<TxtContainer>
				<Typography variant={'subtitle1'}>{userInfo.body}</Typography>
				<TypographySignature variant={'h4'}>{userSignature}</TypographySignature>
			</TxtContainer>
		</SectionContainer>
	)
}

export default AboutMe
