import { useEffect, useState } from 'react'

// Mój pierwszy, customowy hook :)
const useFetch = url => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch(url)
				const data = await response.json()
				setData(data)
				setIsLoading(false)
			} catch (err) {
				setIsLoading(false)
				setError('WYSTĄPIŁ BŁĄD! POWÓD: ' + err.message)
				// console.log('BŁĄD! : ' + err.message)
			}
		}
		getData()
	}, [url])

	return { data, isLoading, error }
}

export default useFetch
