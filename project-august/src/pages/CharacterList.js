import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

import CharacterCard from '../components/CharacterCard'
import useFetch from '../components/useFetch'
import CharacterListHeader from '../components/CharacterListHeader'

const CardsContainer = styled.div`
	padding: 40px;
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
			<CharacterListHeader
				error={error}
				data={data}
				page={page}
				handlePage={handlePage}
				isLoading={isLoading}
				handleFilterSelect={handleFilterSelect}
				filterSelectStatus={filterSelectStatus}
				handleFilterSwitch={handleFilterSwitch}
				switchChecked={switchChecked}
			/>
			<CardsContainer>
				<Grid container spacing={4}>
					{data &&
						data.results.map(card => {
							const { name, status, species, image, id } = card

							return (
								<Grid item xs={12} sm={6} md={3} lg={2} xl={2} key={id}>
									<CharacterCard name={name} status={status} species={species} img={image} id={id} key={id} />
								</Grid>
							)
						})}
				</Grid>
			</CardsContainer>
		</div>
	)
}

export default CharacterList
