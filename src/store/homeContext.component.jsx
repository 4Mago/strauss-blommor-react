import React, { createContext, useState, useEffect } from 'react'
import sanityClient from '../Client'
export const HomeContext = createContext()

const HomeContextProvider = props => {
	const [home, setHome] = useState('')
	useEffect(() => {
		const homeQuery = `*[_type == "home" ]`
		sanityClient.fetch(homeQuery).then(home => {
			home.forEach(home => {
				setHome(home)
			})
		})
		return
	}, [])
	return (
		<HomeContext.Provider value={{ home }}>
			{props.children}
		</HomeContext.Provider>
	)
}

export default HomeContextProvider
