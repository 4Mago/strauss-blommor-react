import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const BegravContext = createContext()

const BegravContextProvider = props => {
	const [begrav, setBegrav] = useState('')
    
	useEffect(() => {
		const begravQuery = `*[_type == "begrav"]`
		sanityClient.fetch(begravQuery).then(begrav => {
			begrav.forEach(begrav => {
				setBegrav(begrav)
			})
		})
		return
	}, [])
	return (
		<BegravContext.Provider value={{ begrav }}>
			{props.children}
		</BegravContext.Provider>
	)
}

export default BegravContextProvider
