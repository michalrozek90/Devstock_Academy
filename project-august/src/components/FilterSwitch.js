import styled from 'styled-components'
import { FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@material-ui/core'

const SwitchContainer = styled.div`
	margin: 0 3rem;
`

const FilterSelect = ({ handleFilterSwitch, switchChecked }) => {
	return (
		<SwitchContainer>
			<FormControl component='fieldset'>
				<FormGroup>
					<FormControlLabel control={<Switch checked={switchChecked} onChange={handleFilterSwitch} />} />
				</FormGroup>
			</FormControl>
			<FormLabel component='legend'>{switchChecked ? 'Z-A' : 'A-Z'}</FormLabel>
		</SwitchContainer>
	)
}

export default FilterSelect
