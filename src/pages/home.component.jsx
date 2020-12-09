import React from 'react'
import '../components/the-big-file.css'
import GoingDown2 from '../components/parallax/GoingDown2'
import GoingDown from '../components/parallax/goingDown'
import SliderShow from '../components/Misc/SliderShow'
import { HomeContext } from '../store/home-context.component'
import OpenHours from '../components/Misc/openHours'
import styled from 'styled-components'
import GoogleMaps from '../components/Misc/GoogleMaps'
import Header from '../components/header/header'

const OuterContainer = styled.div`
	width: 100%;
	height: 130vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Home = () => {
	// Keep to connect to sanity comment to remove warning import {useContext} from React
	return (
		<div>
			<OuterContainer>
				<GoingDown />
				<Header />				
				<GoingDown2 />
			</OuterContainer>

			<SliderShow />
			<OpenHours />
			<GoogleMaps />
			<div className='vertical-space-inbetween1'></div>
			<div className='vertical-space-inbetween2'></div>
			<div className='vertical-space-inbetween3'></div>
			<div className='vertical-space-inbetween4'></div>
		</div>
	)
}

export default Home
