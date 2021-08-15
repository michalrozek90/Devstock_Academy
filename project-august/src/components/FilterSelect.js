import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	disabled: {
		borderBottom: '2px solid black',
	},
}))

const FilterSelect = ({ handleFilterStatus, filterStatus }) => {
	const classes = useStyles()

	return (
		<FormControl className={classes.formControl}>
			<Select
				onChange={e => handleFilterStatus(e.target.value)}
				value={filterStatus}
				className={classes.selectEmpty}
				placeholder={'Filtruj'}>
				<MenuItem className={classes.disabled} disabled>
					Pokaż:
				</MenuItem>
				<MenuItem value={'&status='}>Wszystkie</MenuItem>
				<MenuItem value={`&status=alive`}>Żywe</MenuItem>
				<MenuItem value={`&status=dead`}>Martwe</MenuItem>
				<MenuItem value={`&status=unknown`}>Nieznane</MenuItem>
			</Select>
			<FormHelperText>Filtruj</FormHelperText>
		</FormControl>
	)
}

export default FilterSelect
