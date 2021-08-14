import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, makeStyles } from '@material-ui/core'

import navigationButtons from '../constants/navigationButtons'
import Logo from './Logo'

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
	activeLink: {
		// color: "green"
	},
})

const Nav = () => {
	const classes = useStyles()

	const menu = navigationButtons.map(item => (
		<NavLink activeClassName={classes.activeLink} className={classes.link} to={item.path} key={item.name}>
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
