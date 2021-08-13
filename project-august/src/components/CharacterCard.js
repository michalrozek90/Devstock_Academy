import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { CardActionArea, makeStyles } from '@material-ui/core'

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
			transform: 'scale(1.1)',
		},
	},
	header: {
		height: '4rem',
	},
	content: {
		fontSize: '12px',
	},
})

const CharacterCard = ({ name, status, species, img, id }) => {
	const classes = useStyles()
	return (
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
	)
}

export default CharacterCard
