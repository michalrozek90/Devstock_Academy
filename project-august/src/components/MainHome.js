import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew' // O mnie
import TimerIcon from '@material-ui/icons/Timer' // Stoper
import ThumbUpIcon from '@material-ui/icons/ThumbUp' // Licznik
import PeopleAltIcon from '@material-ui/icons/PeopleAlt' // Lista postaci
import PersonIcon from '@material-ui/icons/Person' // Logowanie
import PersonAddIcon from '@material-ui/icons/PersonAdd' // Rejestracja

const navigationLinks = [
	{ name: 'O mnie', path: '/aboutme', exact: true, icon: <AccessibilityNewIcon /> },
	{ name: 'Stoper', path: '/stopwatch', icon: <TimerIcon /> },
	{ name: 'Licznik', path: '/counterawdwdawddaawdawdwdawda', icon: <ThumbUpIcon /> },
	{ name: 'Lista postaci', path: '/character-list', icon: <PeopleAltIcon /> },
	{ name: 'Logowanie', path: '/login', icon: <PersonIcon /> },
	{ name: 'Rejestracja', path: '/registration', icon: <PersonAddIcon /> },
]

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	background-color: lightgray;
`
const TileContainer = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	padding: 30px;
	background-color: yellowgreen;
`
const IconContainer = styled.div`
	width: 100%;
	height: 100%;
	font-size: 4rem;
	color: red;
`

const MainHome = () => {
	const tiles = navigationLinks.map(item => (
		<NavLink to={item.path}>
			<TileContainer>
				<IconContainer>{item.icon}</IconContainer>
				<Typography>{item.name}</Typography>
				<Typography>{item.path}</Typography>
			</TileContainer>
		</NavLink>
	))

	return <MainContainer>{tiles}</MainContainer>
}

export default MainHome
