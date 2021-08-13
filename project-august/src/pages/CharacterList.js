import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
// import { Switch, Route } from 'react-router-dom'

import CharacterCard from '../components/CharacterCard'

const CharacterList = () => {
	const API = 'https://rickandmortyapi.com/api/character'

	const [cards, setCards] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		try {
			const response = await fetch(API)
			const data = await response.json()
			setCards(data)
			setIsLoading(false)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<Container>
				{isLoading && <p>Loading...</p>}
				{cards && <div>Ogólna liczba postaci: {cards.info.count}</div>}
				{cards && <div>Liczba dostępnych stron: {cards.info.pages}</div>}
			</Container>
			<Grid container spacing={3}>
				{cards &&
					cards.results.map(card => {
						const { name, status, species, image, id } = card

						return (
							<Grid item key={id} xs={12} sm={6} md={4} lg={2} xl={2}>
								<CharacterCard name={name} status={status} species={species} img={image} id={id} key={id} />
							</Grid>
						)
					})}
			</Grid>
		</>
	)
}

export default CharacterList
