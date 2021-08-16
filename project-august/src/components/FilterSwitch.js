import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import styled from 'styled-components'

const SwitchContainer = styled.div`
	/* position: absolute; */
	bottom: 0;
	right: 0;
`

const FilterSelect = ({ handleFilterSwitch, switchChecked }) => {
	return (
		<SwitchContainer>
			<FormControl component='fieldset'>
				<FormGroup>
					<FormControlLabel control={<Switch checked={switchChecked} onChange={handleFilterSwitch} />} />
				</FormGroup>
			</FormControl>
			<FormLabel component='legend'>A-Z</FormLabel>
		</SwitchContainer>
	)
}

export default FilterSelect
