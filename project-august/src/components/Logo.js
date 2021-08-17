import { NavLink } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import PolymerIcon from '@material-ui/icons/Polymer'

const Logo = () => (
	<NavLink to={'/'}>
		<IconButton>
			<PolymerIcon fontSize={'large'} color={'secondary'} />
		</IconButton>
	</NavLink>
)

export default Logo
