import { Button, makeStyles } from '@material-ui/core'
import PolymerIcon from '@material-ui/icons/Polymer' // Logo
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
	MuiButtonStartIcon: {
		margin: '0',
		padding: '0',
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		textAlign: 'center',
	},

	button: {
		MuiButtonStartIcon: {
			margin: '0',
			padding: '0',
			backgroundColor: 'red',
		},
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '150px',
		height: '150px',
		border: '2px solid black',
	},

	icon: {
		display: 'flex',
		width: '50%',
		height: '50%',
	},
})

const Logo = () => {
	const classes = useStyles()
	return (
		<div className={classes.iconContainer}>
			<NavLink to={'/homepage'}>
				<Button className={classes.button} startIcon={<PolymerIcon className={classes.icon} />} />
			</NavLink>
		</div>
	)
}

export default Logo
