import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew' // O mnie
import TimerIcon from '@material-ui/icons/Timer' // Stoper
import ThumbUpIcon from '@material-ui/icons/ThumbUp' // Licznik
import PeopleAltIcon from '@material-ui/icons/PeopleAlt' // Lista postaci
import PersonIcon from '@material-ui/icons/Person' // Logowanie
import PersonAddIcon from '@material-ui/icons/PersonAdd' // Rejestracja

const styles = {
	largeIcon: {
		transform: 'scale(5.8)',
	},
}

const cardsInfo = [
	{
		id: 1,
		title: 'O mnie',
		description: 'Poznajmy się bliżej!',
		path: '/aboutme',
		exact: true,
		icon: <AccessibilityNewIcon iconStyle={styles.largeIcon} />,
	},
	{
		id: 2,
		title: 'Stoper',
		description: 'Szczęśliwi czasu nie liczą? Nieprawda!',
		path: '/stopwatch',
		icon: <TimerIcon fontSize={'medium'} />,
	},
	{
		id: 3,
		title: 'Licznik',
		description: 'Chyba nawet działa!',
		path: '/counter',
		icon: <ThumbUpIcon fontSize={'small'} />,
	},
	{
		id: 4,
		title: 'Lista postaci',
		description: 'Obejrzyj Rick & Morty i to bez Netflixa!',
		path: '/character-list',
		icon: <PeopleAltIcon />,
	},
	{
		id: 5,
		title: 'Logowanie',
		description: 'Zaloguj się i przestań być tylko gościem!',
		path: '/login',
		icon: <PersonIcon />,
	},
	{
		id: 6,
		title: 'Rejestracja',
		description: 'Nie masz konta? Zarejestruj się już dziś!',
		path: '/registration',
		icon: <PersonAddIcon />,
	},
]

export default cardsInfo
