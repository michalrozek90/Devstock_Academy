import { Button, FormControl, OutlinedInput, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

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

const Header = () => {
	return (
		<HeaderContainer>
			<FormContainer>
				<FormControl>
					<Box>
						<Typography variant={'h3'} color={'textPrimary'} style={{ color: 'white', marginBottom: '1rem' }}>
							Dołącz do nas!
						</Typography>
						<Typography className='subik' variant={'h5'} style={{ color: 'white' }}>
							Zasubskrybuj aby otrzymywać najnowsze informacje na bieżąco
						</Typography>
						<div>
							<OutlinedInput
								placeholder={'Wprowadź email'}
								color={'secondary'}
								style={{ color: 'white', width: '50%', height: '3rem', margin: '1rem' }}></OutlinedInput>
							<Button variant={'contained'} color={'secondary'} style={{ height: '3rem' }}>
								Subskrybuj teraz!
							</Button>
						</div>
					</Box>
				</FormControl>
			</FormContainer>
		</HeaderContainer>
	)
}

export default Header
