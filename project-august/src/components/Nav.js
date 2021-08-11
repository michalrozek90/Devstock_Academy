import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button, Container, makeStyles } from '@material-ui/core'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew' // O mnie
import TimerIcon from '@material-ui/icons/Timer' // Stoper
import ThumbUpIcon from '@material-ui/icons/ThumbUp' // Licznik
import PeopleAltIcon from '@material-ui/icons/PeopleAlt' // Lista postaci
import PersonIcon from '@material-ui/icons/Person' // Logowanie
import PersonAddIcon from '@material-ui/icons/PersonAdd' // Rejestracja

import Logo from './Logo'

const navigationLinks = [
	{ name: 'O mnie', path: '/aboutme', exact: true, variant: 'text', color: 'primary', icon: <AccessibilityNewIcon /> },
	{ name: 'Stoper', path: '/stopwatch', variant: 'text', color: 'primary', icon: <TimerIcon /> },
	{ name: 'Licznik', path: '/counter', variant: 'text', color: 'primary', icon: <ThumbUpIcon /> },
	{ name: 'Lista postaci', path: '/character-list', variant: 'text', color: 'primary', icon: <PeopleAltIcon /> },
	{ name: 'Logowanie', path: '/login', variant: 'text', color: 'primary', icon: <PersonIcon /> },
	{ name: 'Rejestracja', path: '/registration', variant: 'contained', color: 'secondary', icon: <PersonAddIcon /> },
]

const useStyles = makeStyles({
	navBar: {
		maxWidth: '100%',
		position: 'sticky',
		top: '0',
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid black',
		backgroundColor: 'white',
		zIndex: '999',
	},

	leftSide: {
		display: 'flex',
		flexBasis: '20vw',
		justifyContent: 'center',
		alignItems: 'center',
	},

	rightSide: {
		display: 'flex',
		justifyContent: 'flex-end',
	},

	button: {
		padding: '15px 20px',
		boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
	},

	link: {
		textDecoration: 'none',
	},
})

const Nav = () => {
	const classes = useStyles()

	const menu = navigationLinks.map(item => (
		<NavLink className={classes.link} to={item.path} key={item.name}>
			<Button className={classes.button} variant={item.variant} color={item.color} endIcon={item.icon}>
				{item.name}
			</Button>
		</NavLink>
	))

	return (
		<Container className={classes.navBar}>
			<Container className={classes.leftSide}>
				<Logo />
			</Container>
			<Container className={classes.rightSide}>
				<ul>{menu}</ul>
			</Container>
		</Container>
	)
}

export default Nav
