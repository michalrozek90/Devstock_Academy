import React, { useEffect, useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import CharacterCard from '../components/CharacterCard'

const CharacterList = () => {
	const [cards, setCards] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [page, setPage] = useState(1)

	const API = `https://rickandmortyapi.com/api/character/?page=${page}`

	const getData = async () => {
		try {
			const response = await fetch(API)
			const data = await response.json()
			setCards(data)
			setIsLoading(false)
			// console.log(data)
		} catch (err) {
			console.log(err)
		}
	}

	const handlePage = async e => {
		console.log(cards.info)
		if (e.target.outerText === 'POPRZEDNIA') {
			if (cards.info.prev === null) {
				return alert('jesteś na pierwszej stronie')
			} else {
				setPage(page - 1)
			}
		} else if (e.target.outerText === 'NASTĘPNA') {
			if (cards.info.next === null) {
				return alert('jesteś na ostatniej stronie')
			} else {
				setPage(page + 1)
			}
		}
	}

	useEffect(() => {
		getData()
	}, [handlePage])

	return (
		<>
			<Container>
				{isLoading && <p>Loading...</p>}
				{cards && <div>Ogólna liczba postaci: {cards.info.count}</div>}
				{cards && (
					<div>
						Obecna strona: {page} z {cards.info.pages}
					</div>
				)}
			</Container>
			<Button onClick={handlePage} variant={'outlined'} color={'primary'}>
				Poprzednia
			</Button>
			<Button onClick={handlePage} variant={'outlined'} color={'secondary'}>
				Następna
			</Button>

			<Container>
				<Grid container spacing={3}>
					{cards &&
						cards.results.map(card => {
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
