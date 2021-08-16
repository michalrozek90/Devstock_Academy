import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import styled from 'styled-components'

import CharacterCard from '../components/CharacterCard'
import useFetch from '../components/useFetch'
import FilterSelect from '../components/FilterSelect'
import FilterSwitch from '../components/FilterSwitch'

const Header = styled.div`
	position: relative;
	display: flex;
	flex-basis: 100%;
	background-color: lightgray;
`

const CharacterList = () => {
	const [page, setPage] = useState(1)
	const [filterSelectStatus, setFilterSelectStatus] = useState('')
	const [switchChecked, setSwitchChecked] = useState(false)
	const { data, isLoading, error } = useFetch(
		`https://rickandmortyapi.com/api/character/?page=${page}${filterSelectStatus}`
	)

	const handlePage = async e => {
		if (e.target.outerText === 'POPRZEDNIA') {
			setPage(page - 1)
		} else if (e.target.outerText === 'NASTĘPNA') {
			setPage(page + 1)
		}
	}

	const handleFilterSelect = newFilter => {
		setPage(1)
		setFilterSelectStatus(newFilter)
	}

	const handleFilterSwitch = () => {
		setSwitchChecked(prev => !prev)
		if (switchChecked) {
			data.results.sort((a, b) => (a.name > b.name ? 1 : -1))
		} else {
			data.results.sort((a, b) => (a.name < b.name ? 1 : -1))
		}
	}

	return (
		<div>
			<Header>
				<div>
					{error && <h1>{error}</h1>}
					{data && <div>Ogólna liczba postaci: {data.info.count}</div>}
					{data && (
						<div>
							Obecna strona: {page} z {data.info.pages}
						</div>
					)}
				</div>
				{data && (
					<div>
						<div>
							<div>
								<Button
									onClick={handlePage}
									variant={'outlined'}
									disabled={data.info.prev === null || isLoading ? true : false}
									color={'primary'}>
									{data.info.prev === null ? 'BRAK' : 'POPRZEDNIA'}
								</Button>

								<Button
									onClick={handlePage}
									variant={'outlined'}
									disabled={data.info.next === null || isLoading ? true : false}
									color={'secondary'}>
									{data.info.next === null ? 'BRAK' : 'NASTĘPNA'}
								</Button>
							</div>
							<div>
								<FilterSelect handleFilterSelect={handleFilterSelect} filterSelectStatus={filterSelectStatus} />
								<FilterSwitch handleFilterSwitch={handleFilterSwitch} switchChecked={switchChecked} />
							</div>
						</div>
					</div>
				)}
				{isLoading && <p>Loading...</p>}
			</Header>
			<div>
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
			</div>
		</div>
	)
}

export default CharacterList
