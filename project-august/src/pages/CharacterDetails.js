import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import styled from 'styled-components'
import useFetch from '../components/useFetch'

const ImageContainer = styled.div`
	height: 300px;
	width: 200px;
`

const CharacterDetails = () => {
	const { id, name } = useParams()
	const { data, error, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)

	return (
		<>
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
		</>
	)
}

export default CharacterDetails
