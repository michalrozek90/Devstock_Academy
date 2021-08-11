import { Container, Grid, Icon, Paper, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import cardsInfo from '../constants/cardsInfo'

const useStyles = makeStyles({
	mainContainer: {
		padding: '50px',
	},
	icon: {
		width: '100px',
		height: '100px',
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	description: {
		marginBottom: '1rem',
	},
	link: {
		textDecoration: 'none',
	},
	paper: {
		height: '90%',
		margin: '20px',
		textAlign: 'center',
		boxShadow:
			'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',

		'&:hover': {
			boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px',
			transition: '0.3s',
		},
	},
})

const MainHome = () => {
	const classes = useStyles()

	const tiles = cardsInfo.map(({ id, title, description, path, icon }) => (
		<Grid className={classes.gridItem} item key={id} xs={12} sm={6} md={4} lg={4} xl={4}>
			<NavLink className={classes.link} to={path}>
				<Paper className={classes.paper}>
					<Icon style={{ border: '2px solid red' }} fontSize='large' color={'primary'}>
						{icon}
					</Icon>
					<Typography className={classes.title} color={'secondary'}>
						{title}
					</Typography>
					<Typography className={classes.description}>{description}</Typography>
				</Paper>
			</NavLink>
		</Grid>
	))

	return (
		<Container className={classes.kontener}>
			<Grid container className={classes.mainContainer}>
				{tiles}
			</Grid>
		</Container>
	)
}

export default MainHome
