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
}))

const FilterSelect = ({ handleFilterStatus, filterStatus }) => {
	const classes = useStyles()

	console.log('filter status : ', filterStatus)

	const selectFilters = [
		{ id: 1, name: 'Wszystkie', value: undefined },
		{ id: 2, name: 'Żywe', value: '&status=alive' },
		{ id: 3, name: 'Nieżywe', value: '&status=dead' },
		{ id: 4, name: 'Nieznane', value: '&status=unknown' },
	]

	return (
		<FormControl className={classes.formControl}>
			<Select
				onChange={e => handleFilterStatus(e.target.value)}
				value={filterStatus}
				displayEmpty
				className={classes.selectEmpty}
				inputProps={{ 'aria-label': 'Without label' }}>
				<MenuItem value={undefined} disabled>
					Pokaż:
				</MenuItem>
				{selectFilters.map(filter => (
					<MenuItem value={filter.value} key={filter.id}>
						{filter.name}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>Filtruj</FormHelperText>
		</FormControl>
	)
}

export default FilterSelect
