import React, { useContext } from 'react'
import '../components/the-big-file.css'
import '../components/flowerBloom'
import FlowerBloom from '../components/flowerBloom'
import GreetingText from '../components/greetingText'
import MainText from '../components/MainText'
import GoingUp from '../components/parallax/goingUp'
import GoingDown2 from '../components/parallax/GoingDown2'
import GoingUp2 from '../components/parallax/goingUp2'
import GoingDown from '../components/parallax/goingDown'
import HeaderImage from '../components/header-image.component'
import SliderShow from '../components/SliderShow'
import { HomeContext } from '../../store/HomeContext'

const Home = () => {
	const { home } = useContext(HomeContext)
	return (
		<div>
			<div className='outer-container'>
				<GoingDown />
				<HeaderImage>
					<div className='main-inner'>
						<GoingUp />
						<div id='' className='middle-part'>
							{/* <div className='logo-box'><img className='logo' alt='logo' src='/images/strauss-logo.png'></img></div> */}
							<MainText></MainText> <FlowerBloom />
						</div>
						<GoingUp2 />
					</div>
				</HeaderImage>
				<GoingDown2 />
			</div>

			<SliderShow />
			<GreetingText></GreetingText>

			<div className='vertical-space-inbetween1'></div>
			<div className='vertical-space-inbetween2'></div>
			<div className='vertical-space-inbetween3'></div>
			<div className='vertical-space-inbetween4'></div>
		</div>
	)
}

export default Home
