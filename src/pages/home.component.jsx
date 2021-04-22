import React from 'react'
import '../components/the-big-file.css'
import OpenHours from '../components/Misc/openHours'
import styled from 'styled-components'
import GoogleMaps from '../components/Misc/GoogleMaps'
import Header from '../components/header/header'
import Tagline from '../components/header/Tagline'
import SliderBilder from '../components/sliderboy'

const OuterContainer = styled.div`
	width: 100%;
	max-height: 130vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Home = () => {
	// Keep to connect to sanity comment to remove warning import {useContext} from React
	return (
		<>
			<OuterContainer>
					<Header />				
			</OuterContainer>
			<Tagline />
			<SliderBilder />
			<OpenHours />
			<GoogleMaps />
		</>
	)
}

export default Home
