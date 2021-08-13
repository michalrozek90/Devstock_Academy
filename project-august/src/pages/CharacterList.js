import React, { useEffect, useState } from 'react'
import { Container, Grid, Button } from '@material-ui/core'
import CharacterCard from '../components/CharacterCard'

const CharacterList = () => {
	const [cards, setCards] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [page, setPage] = useState(1)

	const handlePage = async e => {
		if (e.target.outerText === 'PREV') {
			setPage(page - 1)
		} else if (e.target.outerText === 'NEXT') {
			setPage(page + 1)
		}
		console.log('current page is ' + page)
	}

	useEffect(() => {
		async function getData() {
			try {
				setIsLoading(true)
				const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
				const data = await response.json()
				setCards(data)
				setIsLoading(false)
				console.log(data)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [page])

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
			{cards && (
				<div>
					<Button
						onClick={handlePage}
						variant={cards.info.prev === null || isLoading ? 'disabled' : 'outlined'}
						color={'primary'}>
						PREV
					</Button>

					<Button
						onClick={handlePage}
						variant={cards.info.next === null || isLoading ? 'disabled' : 'outlined'}
						color={'secondary'}>
						NEXT
					</Button>
				</div>
			)}
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
