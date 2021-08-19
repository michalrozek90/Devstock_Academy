import { Button, Typography } from '@material-ui/core'
import styled from 'styled-components'

import FilterSelect from '../components/FilterSelect'
import FilterSwitch from '../components/FilterSwitch'

const Header = styled.div`
	position: relative;
	height: 10vh;
	width: 100%;
	display: flex;
	background-color: #f2f2f2;
`
const InfoContainer = styled(Typography)`
	position: absolute;
	top: 50%;
	left: 5%;
	transform: translateY(-50%);
`
const ButtonContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const PreviousButton = styled(Button)`
	width: 6rem;
	margin-right: 2rem;
`

const NextButton = styled(Button)`
	width: 6rem;
`
const FilterContainer = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
`

const CharacterListHeader = ({
	error,
	data,
	page,
	handleChangePage,
	isLoading,
	handleFilterSelect,
	filterSelectStatus,
	filterSwitchChecked,
	handleFilterSwitch,
	nextButtonText,
	previousButtonText,
	noPageAvailableButtonText,
}) => {
	return (
		<Header>
			<InfoContainer>
				{error && <h1>{error}</h1>}
				{data && (
					<div>
						<Typography gutterBottom>Ogólna liczba postaci: {data.info.count}</Typography>
						<Typography>
							Obecna strona: {page} z {data.info.pages}
						</Typography>
					</div>
				)}
			</InfoContainer>
			{data && (
				<div>
					<ButtonContainer>
						<PreviousButton
							onClick={() => handleChangePage('prev')}
							variant={'outlined'}
							disabled={data.info.prev === null || isLoading ? true : false}
							color={'primary'}>
							{data.info.prev === null ? noPageAvailableButtonText : previousButtonText}
						</PreviousButton>
						<NextButton
							onClick={() => handleChangePage('next')}
							variant={'outlined'}
							disabled={data.info.next === null || isLoading ? true : false}
							color={'secondary'}>
							{data.info.next === null ? noPageAvailableButtonText : nextButtonText}
						</NextButton>
					</ButtonContainer>
					<FilterContainer>
						<FilterSelect handleFilterSelect={handleFilterSelect} filterSelectStatus={filterSelectStatus} />
						<FilterSwitch handleFilterSwitch={handleFilterSwitch} switchChecked={filterSwitchChecked} />
					</FilterContainer>
				</div>
			)}
			{isLoading && <p>Loading...</p>}
		</Header>
	)
}

export default CharacterListHeader
