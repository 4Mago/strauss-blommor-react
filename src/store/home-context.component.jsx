import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const HomeContext = createContext()

const HomeContextProvider = props => {
	const [home, setHome] = useState('')
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		const homeQuery = `*[_type == "client"] | order(date desc)`
		sanityClient.fetch(homeQuery).then(home => {
			const homeArray = []
			home.forEach(home => {
				homeArray.push(home)
			})
			setHome(homeArray)
			setLoaded(true)
		})
		return
	}, [])
	return (
		<HomeContext.Provider value={{ home }}>
			{loaded ? props.children : null}
		</HomeContext.Provider>
	)
}

export default HomeContextProvider
