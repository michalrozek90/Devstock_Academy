import React, { useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import CharacterCard from '../components/CharacterCard'
import useFetch from '../components/useFetch'

const CharacterList = () => {
	const [page, setPage] = useState(1)
	const { data, isLoading, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}`)

	const handlePage = async e => {
		if (e.target.outerText === 'POPRZEDNIA') {
			setPage(page - 1)
		} else if (e.target.outerText === 'NASTĘPNA') {
			setPage(page + 1)
		}
	}

	return (
		<>
			<Container>
				{error && <h1>{error}</h1>}
				{data && <div>Ogólna liczba postaci: {data.info.count}</div>}
				{data && (
					<div>
						Obecna strona: {page} z {data.info.pages}
					</div>
				)}
			</Container>
			{data && (
				<div>
					<Button
						onClick={handlePage}
						variant={data.info.prev === null || isLoading ? 'disabled' : 'outlined'}
						color={'primary'}>
						POPRZEDNIA
					</Button>

					<Button
						onClick={handlePage}
						variant={data.info.next === null || isLoading ? 'disabled' : 'outlined'}
						color={'secondary'}>
						NASTĘPNA
					</Button>
				</div>
			)}
			{isLoading && <p>Loading...</p>}
			<Container>
				<Grid container spacing={3}>
					{data &&
						data.results.map(card => {
							const { name, status, species, image, id } = card

							return (
								<Grid item key={id} xs={12} sm={6} md={3} lg={3} xl={2}>
									<CharacterCard name={name} status={status} species={species} img={image} id={id} key={id} />
								</Grid>
							)
						})}
				</Grid>
			</Container>
		</>
	)
}

export default CharacterList
