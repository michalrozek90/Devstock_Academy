import { useParams } from 'react-router-dom'
import { Button, Container, Typography } from '@material-ui/core'
import styled from 'styled-components'

import useFetch from '../components/useFetch'
import charDetails from '../img/charDetails.jpg'

const MainContainer = styled.div`
	position: relative;
	top: 0;
	bottom: 0;
	height: 90vh;
	width: 100%;
	background-image: url(${charDetails});
	background-size: cover;
	/* background-position: center; */
	background-repeat: no-repeat;
	color: white;
`

const ImageContainer = styled.div`
	position: absolute;
	top: 25%;
	left: 50%;
	height: 400px;
	width: 200px;
	/* border: 2px solid yellow; */
`

const DataContainer = styled(Container)`
	max-width: 40%;
	position: absolute;
	top: 20%;
	left: 5%;
`

const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

	return (
		<MainContainer>
			<Button color={'primary'} variant={'contained'}>
				Jeszcze nie działam... jeszcze!!!
			</Button>
			<Container>
				{isLoading && <p>Loading...</p>}
				{error && <h1>{error}</h1>}
			</Container>
			{data && (
				<DataContainer>
					<Typography variant='h3'>DANE POSTACI:</Typography>
					<Typography variant='h5'>NUMER ID - {id}</Typography>
					<Typography variant='h5'>IMIĘ - {name}</Typography>
					<Typography variant='h5'>STATUS - {data.status}</Typography>
					<Typography variant='h5'>GATUNEK - {data.species}</Typography>
					<ImageContainer />
				</DataContainer>
			)}
		</MainContainer>
	)
}

export default CharacterDetails
