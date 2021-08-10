import { Container, Grid, Icon, Paper, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew' // O mnie
import TimerIcon from '@material-ui/icons/Timer' // Stoper
import ThumbUpIcon from '@material-ui/icons/ThumbUp' // Licznik
import PeopleAltIcon from '@material-ui/icons/PeopleAlt' // Lista postaci
import PersonIcon from '@material-ui/icons/Person' // Logowanie
import PersonAddIcon from '@material-ui/icons/PersonAdd' // Rejestracja

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
	},
	gridItem: {
		// margin: '10px',
	},
})

const MainHome = () => {
	const classes = useStyles()

	const cardsInfo = [
		{
			id: 1,
			title: 'O mnie',
			description: 'Poznajmy się bliżej!',
			path: '/aboutme',
			exact: true,
			icon: <AccessibilityNewIcon className={classes.icon} />,
		},
		{
			id: 2,
			title: 'Stoper',
			description: 'Chyba nawet działa!',
			path: '/stopwatch',
			icon: <TimerIcon className={classes.icon} />,
		},
		{
			id: 3,
			title: 'Licznik',
			description: 'Szczęśliwi czasu nie liczą? Nieprawda!',
			path: '/counter',
			icon: <ThumbUpIcon className={classes.icon} />,
		},
		{
			id: 4,
			title: 'Lista postaci',
			description: 'Postacie z Rick & Morty',
			path: '/character-list',
			icon: <PeopleAltIcon className={classes.icon} />,
		},
		{
			id: 5,
			title: 'Logowanie',
			description: 'Zaloguj się i przestań być tylko gościem!',
			path: '/login',
			icon: <PersonIcon className={classes.icon} />,
		},
		{
			id: 6,
			title: 'Rejestracja',
			description: 'Nie masz konta? Zarejestruj się już dziś!',
			path: '/registration',
			icon: <PersonAddIcon className={classes.icon} />,
		},
	]

	const tiles = cardsInfo.map(({ id, title, description, path, icon }) => (
		<Grid className={classes.gridItem} item key={id} xs={12} sm={6} md={4} lg={4} xl={4}>
			<NavLink className={classes.link} to={path}>
				<Paper className={classes.paper}>
					<Icon color={'primary'}>{icon}</Icon>
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
