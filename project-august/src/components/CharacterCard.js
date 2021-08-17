import React from 'react'
import { Link } from 'react-router-dom'
import {
	Avatar,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	makeStyles,
	Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		margin: '20px, 10px',
		boxShadow:
			'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
	},
	media: {
		height: 200,
		transition: '.3s',
		'&:hover': {
			filter: 'contrast(120%)',
		},
	},
	header: {
		height: '4rem',
	},
	content: {
		fontSize: '12px',
	},
	link: {
		textDecoration: 'none',
	},
})

const CharacterCard = ({ name, status, species, img, id }) => {
	const classes = useStyles()
	return (
		<Link className={classes.link} to={`/character-list/${name}/${id}`} species={species}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardHeader className={classes.header} avatar={<Avatar>{id}</Avatar>} title={name} />
					<CardMedia className={classes.media} image={img} title={name} />
					<CardContent>
						<Typography className={classes.content} variant='overline' color='primary' component='p'>
							Status: {status}
						</Typography>
						<Typography className={classes.content} variant='overline' color='secondary' component='p'>
							Species: {species}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	)
}

export default CharacterCard
