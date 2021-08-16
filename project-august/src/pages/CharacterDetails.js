import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
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
	border: 2px solid yellow;
`

const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

	return (
		<MainContainer>
			<Container>
				{isLoading && <p>Loading...</p>}
				{error && <h1>{error}</h1>}
			</Container>
			{data && (
				<Container>
					<h1>CHARACTER ID - {id}</h1>
					<h1>CHARACTER NAME - {name}</h1>
					<h1>CHARACTER STATUS - {data.status}</h1>
					<h1>CHARACTER SPECIES - {data.species}</h1>

					<ImageContainer />
				</Container>
			)}
		</MainContainer>
	)
}

export default CharacterDetails
