import styled from 'styled-components'
import parrot from '../img/parrot.gif'

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url ${parrot};
	margin-top: 10%;
`
const Gif = styled.img`
	max-width: 15%;
	margin: 3rem;
`

const ErrorPage = () => {
	return (
		<MainContainer>
			<h1>BŁĄD 404</h1>
			<Gif src={parrot} alt='parrot'></Gif>
		</MainContainer>
	)
}

export default ErrorPage
