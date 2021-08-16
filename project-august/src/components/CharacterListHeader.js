import { Button } from '@material-ui/core'
import styled from 'styled-components'
import FilterSelect from '../components/FilterSelect'
import FilterSwitch from '../components/FilterSwitch'

const Header = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 10vh;
	background-color: lightgoldenrodyellow;
`

const PreviousButton = styled(Button)`
	position: absolute;
	bottom: 5%;
	left: 25%;
`

const NextButton = styled(Button)`
	position: absolute;
	bottom: 5%;
	left: 40%;
`
const FilterContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
`

const CharacterListHeader = ({
	error,
	data,
	page,
	handlePage,
	isLoading,
	handleFilterSelect,
	filterSelectStatus,
	handleFilterSwitch,
	switchChecked,
}) => {
	return (
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
							<PreviousButton
								onClick={handlePage}
								variant={'outlined'}
								disabled={data.info.prev === null || isLoading ? true : false}
								color={'primary'}>
								{data.info.prev === null ? 'BRAK' : 'POPRZEDNIA'}
							</PreviousButton>
							<FilterContainer>
								<FilterSelect handleFilterSelect={handleFilterSelect} filterSelectStatus={filterSelectStatus} />
								<FilterSwitch handleFilterSwitch={handleFilterSwitch} switchChecked={switchChecked} />
							</FilterContainer>
							<NextButton
								onClick={handlePage}
								variant={'outlined'}
								disabled={data.info.next === null || isLoading ? true : false}
								color={'secondary'}>
								{data.info.next === null ? 'BRAK' : 'NASTĘPNA'}
							</NextButton>
						</div>
					</div>
				</div>
			)}
			{isLoading && <p>Loading...</p>}
		</Header>
	)
}

export default CharacterListHeader
