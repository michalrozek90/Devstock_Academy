import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, FormHelperText, MenuItem, Select } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	formControl: {
		minWidth: 120,
	},
	disabled: {
		borderBottom: '2px solid black',
	},
}))

const FilterSelect = ({ handleFilterSelect, filterSelectStatus }) => {
	const classes = useStyles()

	return (
		<FormControl className={classes.formControl}>
			<Select
				onChange={e => handleFilterSelect(e.target.value)}
				value={filterSelectStatus}
				className={classes.selectEmpty}
				placeholder={'Filtruj'}>
				<MenuItem className={classes.disabled} disabled>
					Pokaż:
				</MenuItem>
				<MenuItem value={''}>Wszystkie</MenuItem>
				<MenuItem value={`alive`}>Żywe</MenuItem>
				<MenuItem value={`dead`}>Martwe</MenuItem>
				<MenuItem value={`unknown`}>Nieznane</MenuItem>
			</Select>
			<FormHelperText>Filtruj</FormHelperText>
		</FormControl>
	)
}

export default FilterSelect
