import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import { Button, Container, makeStyles } from '@material-ui/core'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew' // O mnie
import TimerIcon from '@material-ui/icons/Timer' // Stoper
import ThumbUpIcon from '@material-ui/icons/ThumbUp' // Licznik
import PeopleAltIcon from '@material-ui/icons/PeopleAlt' // Lista postaci
import PersonIcon from '@material-ui/icons/Person' // Logowanie
import PersonAddIcon from '@material-ui/icons/PersonAdd' // Rejestracja

import Logo from './Logo'

const navigationLinks = [
	{ name: 'O mnie', path: '/', exact: true, variant: 'text', color: 'primary', icon: <AccessibilityNewIcon /> },
	{ name: 'Stoper', path: '/stopwatch', variant: 'text', color: 'primary', icon: <TimerIcon /> },
	{ name: 'Licznik', path: '/counter', variant: 'text', color: 'primary', icon: <ThumbUpIcon /> },
	{ name: 'Lista postaci', path: '/character-list', variant: 'text', color: 'primary', icon: <PeopleAltIcon /> },
	{ name: 'Logowanie', path: '/login', variant: 'text', color: 'primary', icon: <PersonIcon /> },
	{ name: 'Rejestracja', path: '/registration', variant: 'contained', color: 'secondary', icon: <PersonAddIcon /> },
]

const useStyles = makeStyles({
	navBar: {
		maxWidth: '100%',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		border: '1px solid black',
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
		padding: '20px 10px',
	},

	link: {
		textDecoration: 'none',
	},
})

const Nav = () => {
	const classes = useStyles()

	const menu = navigationLinks.map(item => (
		<NavLink className={classes.link} to={item.path}>
			<Button className={classes.button} key={item.name} variant={item.variant} color={item.color} endIcon={item.icon}>
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
