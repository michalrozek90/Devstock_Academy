import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const TitleContainer = styled.div`
	width: 100%;
`

const CustomTitle = styled(Typography)`
	text-transform: uppercase;
	text-align: center;
	margin: 2rem;
`

const Title = ({ title }) => {
	return (
		<TitleContainer>
			<CustomTitle variant='h4'>{title}</CustomTitle>
		</TitleContainer>
	)
}

export default Title
