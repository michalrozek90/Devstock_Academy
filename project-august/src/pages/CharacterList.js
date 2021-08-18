import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementPage, incrementPage, setPage } from '../redux/ducks/characterList'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import CharacterCard from '../components/CharacterCard'
import CharacterListHeader from '../components/CharacterListHeader'
import useFetch from '../customHooks/useFetch'

const nextButtonText = 'NASTĘPNA'
const previousButtonText = 'POPRZEDNIA'
const noPageAvailableButtonText = 'BRAK'

const CardsContainer = styled.div`
	padding: 40px;
`

const CharacterList = () => {
	const dispatch = useDispatch()
	const page = useSelector(state => state.characterList.page)

	console.log(page)
	// const [page, setPage] = useState(1)
	const [filterSelectStatus, setFilterSelectStatus] = useState('')
	const [switchChecked, setSwitchChecked] = useState(false)
	const { data, isLoading, error } = useFetch(
		`https://rickandmortyapi.com/api/character/?page=${page}&status=${filterSelectStatus}`
	)

	const handlePage = async e => {
		const { outerText } = e.target

		if (switchChecked) {
			handleFilterSwitch()
		}
		if (outerText === previousButtonText.toUpperCase()) {
			dispatch(decrementPage())
		} else if (outerText === nextButtonText.toUpperCase()) {
			dispatch(incrementPage())
		}
	}

	const handleFilterSelect = newFilter => {
		dispatch(setPage())
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
				nextButtonText={nextButtonText}
				previousButtonText={previousButtonText}
				noPageAvailableButtonText={noPageAvailableButtonText}
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
