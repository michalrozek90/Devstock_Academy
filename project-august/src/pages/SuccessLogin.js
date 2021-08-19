import styled from 'styled-components'

const TitleContainer = styled.div`
	margin-top: 15%;
	text-align: center;
	text-transform: uppercase;
	background-color: rgb(55, 133, 88);
`

const SuccessLogin = () => {
	return (
		<TitleContainer>
			<h1>panel użytkownika</h1>
		</TitleContainer>
	)
}

export default SuccessLogin
