import React, { useState } from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const FilterSelect = ({ handleFilterSwitch, switchChecked }) => {
	return (
		<div>
			<FormControl component='fieldset'>
				<FormLabel component='legend'>A-Z</FormLabel>
				<FormGroup>
					<FormControlLabel control={<Switch checked={switchChecked} onChange={handleFilterSwitch} />} />
				</FormGroup>
			</FormControl>
		</div>
	)
}

export default FilterSelect
