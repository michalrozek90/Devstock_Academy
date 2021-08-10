import React from 'react'
import styled from 'styled-components'
import myImage from '../img/myImage.jpg'

const SectionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	background: linear-gradient(to left, #232526, #414345);
`

const ImgContainer = styled.div`
	height: 50%;
	width: 50%;
	border-radius: 50%;
	background-image: url(${myImage});
	border: 2px solid black;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

const userInfo = [
	{
		firstName: 'Michał',
		lastName: 'Rożek',
		age: '31',
	},
]

const AboutMe = () => {
	return (
		<SectionContainer>
			<ImgContainer></ImgContainer>
		</SectionContainer>
	)
}

export default AboutMe
