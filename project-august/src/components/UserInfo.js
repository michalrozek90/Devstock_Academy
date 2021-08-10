// import myImage from '../img/myImage'

const UserInfo = props => {
	const moje = props.UserInfo
	console.log('propy w userInfo : ', props)
	console.log('moje w userInfo : ', moje)
	return (
		<div>
			<h1>{'firstName'}</h1>
			<h2>{'lastName'}</h2>
			<p>{'age'}</p>
			<p>Yo!</p>
		</div>
	)
}

export default UserInfo
