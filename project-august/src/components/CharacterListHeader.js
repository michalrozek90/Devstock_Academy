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
	handleChangePage,
	isLoading,
	handleFilterSelect,
	filterSelectStatus,
	handleFilterSwitch,
	switchChecked,
	nextButtonText,
	previousButtonText,
	noPageAvailableButtonText,
}) => {
	return (
		<Header>
			<div>
				{error && <h1>{error}</h1>}
				{data && (
					<div>
						<div>Ogólna liczba postaci: {data.info.count}</div>
						<div>
							Obecna strona: {page} z {data.info.pages}
						</div>
					</div>
				)}
			</div>
			{data && (
				<div>
					<div>
						<div>
							<PreviousButton
								onClick={() => handleChangePage('prev')}
								variant={'outlined'}
								disabled={data.info.prev === null || isLoading ? true : false}
								color={'primary'}>
								{data.info.prev === null ? noPageAvailableButtonText : previousButtonText}
							</PreviousButton>
							<FilterContainer>
								<FilterSelect handleFilterSelect={handleFilterSelect} filterSelectStatus={filterSelectStatus} />
								<FilterSwitch handleFilterSwitch={handleFilterSwitch} switchChecked={switchChecked} />
							</FilterContainer>
							<NextButton
								onClick={() => handleChangePage('next')}
								variant={'outlined'}
								disabled={data.info.next === null || isLoading ? true : false}
								color={'secondary'}>
								{data.info.next === null ? noPageAvailableButtonText : nextButtonText}
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
