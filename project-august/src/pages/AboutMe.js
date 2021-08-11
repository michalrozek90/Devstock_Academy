import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import myImage from '../img/myImage.png'

const SectionContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	width: 100%;
	background: radial-gradient(at top right, #333333 10%, #000000 70%);
`

const ImgContainer = styled.div`
	height: 65%;
	width: 55%;
	border-radius: 50%;
	/* border: 2px solid white; */
	background-image: url(${myImage});
	background-size: 60%;
	background-position: center;
	background-repeat: no-repeat;
`

const TxtContainer = styled.div`
	border: 2px solid white;
`

const userInfo = [
	{
		firstName: 'Michał',
		lastName: 'Rożek',
		age: '31',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor enim ipsam molestiae laboriosam esse, quaerat recusandae assumenda nulla aut? Eaque provident repudiandae iusto magni consequatur accusantium eos officia illum!',
	},
]

const AboutMe = () => {
	return (
		<SectionContainer>
			<ImgContainer />
			<TxtContainer>
				<Typography>siema</Typography>
			</TxtContainer>
		</SectionContainer>
	)
}

export default AboutMe
