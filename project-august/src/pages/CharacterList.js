import React, { useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core'

import CharacterCard from '../components/CharacterCard'
import useFetch from '../components/useFetch'
import FilterSelect from '../components/FilterSelect'

const CharacterList = () => {
	const [page, setPage] = useState(1)
	const [filterStatus, setFilterStatus] = useState('')
	const { data, isLoading, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}${filterStatus}`)

	const handlePage = async e => {
		if (e.target.outerText === 'POPRZEDNIA') {
			setPage(page - 1)
		} else if (e.target.outerText === 'NASTĘPNA') {
			setPage(page + 1)
		}
	}

	const handleFilterStatus = newFilter => {
		setPage(1)
		setFilterStatus(newFilter)
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
					<Container>
						<Button
							onClick={handlePage}
							variant={'outlined'}
							disabled={data.info.prev === null || isLoading ? true : false}
							color={'primary'}>
							POPRZEDNIA
						</Button>

						<Button
							onClick={handlePage}
							variant={'outlined'}
							disabled={data.info.next === null || isLoading ? true : false}
							color={'secondary'}>
							NASTĘPNA
						</Button>
						<FilterSelect handleFilterStatus={handleFilterStatus} filterStatus={filterStatus} />
					</Container>
				</div>
			)}
			{isLoading && <p>Loading...</p>}
			<Container>
				<Grid container spacing={3}>
					{data &&
						data.results.map(card => {
							const { name, status, species, image, id } = card

							return (
								<Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={id}>
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
