import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const TitleContainer = styled.div`
	width: 100%;
`

const MyTitle = styled(Typography)`
	font-family: 'Patrick Hand';
	text-transform: uppercase;
	text-align: center;
	margin: 2rem;
`

const Title = ({ title }) => {
	return (
		<TitleContainer>
			<MyTitle variant='h4'>{title}</MyTitle>
		</TitleContainer>
	)
}

export default Title
