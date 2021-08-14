import React, { useEffect, useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import CharacterCard from '../components/CharacterCard'

const CharacterList = () => {
	const [cards, setCards] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [page, setPage] = useState(1)

	const handlePage = async e => {
		if (e.target.outerText === 'POPRZEDNIA') {
			setPage(page - 1)
		} else if (e.target.outerText === 'NASTĘPNA') {
			setPage(page + 1)
		}
	}

	useEffect(() => {
		async function getData() {
			try {
				setIsLoading(true)
				const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
				const data = await response.json()
				setCards(data)
				setIsLoading(false)
			} catch (err) {
				console.log('błąd! ', err)
			}
		}
		getData()
	}, [page])

	return (
		<>
			<Container>
				{cards && <div>Ogólna liczba postaci: {cards.info.count}</div>}
				{cards && (
					<div>
						Obecna strona: {page} z {cards.info.pages}
					</div>
				)}
			</Container>
			{cards && (
				<div>
					<Button
						onClick={handlePage}
						variant={cards.info.prev === null || isLoading ? 'disabled' : 'outlined'}
						color={'primary'}>
						POPRZEDNIA
					</Button>

					<Button
						onClick={handlePage}
						variant={cards.info.next === null || isLoading ? 'disabled' : 'outlined'}
						color={'secondary'}>
						NASTĘPNA
					</Button>
				</div>
			)}
			{isLoading && <p>Loading...</p>}
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
