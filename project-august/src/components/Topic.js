import { useParams } from 'react-router-dom'

const Topic = () => {
	let { topicId } = useParams()
	return <h3>Topic ID: {topicId}</h3>
}

export default Topic
