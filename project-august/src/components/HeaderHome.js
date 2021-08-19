import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, FormControl, OutlinedInput, Typography } from '@material-ui/core'

import bgcImage from '../img/aboutMe.jpg'

const HeaderContainer = styled.div`
	height: 65vh;
	background-image: url(${bgcImage});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`
const FormContainer = styled.div`
	& {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
`
const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Title = styled(Typography)`
	color: white;
	margin-bottom: 1rem;
`
const CustomContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
const CustomInput = styled(OutlinedInput)`
	color: white;
	background-color: rgba(0, 0, 0, 0.3);
	width: 50%;
	height: 3rem;
	margin: 1rem;
`
const CustomLink = styled(Link)`
	text-decoration: none;
`

const Header = () => {
	return (
		<HeaderContainer>
			<FormContainer>
				<FormControl>
					<Box>
						<Title variant={'h3'} color={'textPrimary'}>
							Dołącz do nas!
						</Title>
						<Title variant={'h5'}>Zasubskrybuj aby otrzymywać najnowsze informacje na bieżąco</Title>
						<CustomContainer>
							<CustomInput placeholder={'Wprowadź email'} color={'secondary'}></CustomInput>
							<CustomLink to='/registration'>
								<Button variant={'contained'} color={'secondary'} style={{ height: '3rem' }}>
									Subskrybuj teraz!
								</Button>
							</CustomLink>
						</CustomContainer>
					</Box>
				</FormControl>
			</FormContainer>
		</HeaderContainer>
	)
}

export default Header
