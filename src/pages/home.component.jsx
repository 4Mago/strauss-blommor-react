import React from 'react'
import '../components/the-big-file.css'
import '../components/flowerBloom'
import FlowerBloom from '../components/flowerBloom'
import GreetingText from '../components/greetingText'
import MainText from "../components/MainText"
import GoingUp from "../components/parallax/goingUp"
import GoingDown2 from "../components/parallax/GoingDown2"
import GoingUp2 from "../components/parallax/goingUp2"
import GoingDown from "../components/parallax/goingDown"
import HeaderImage from '../components/header-image.component'
import SliderShow from '../components/SliderShow'
import styled from 'styled-components'

const OuterContainer = styled.div`
width: 100%;
height: 130vh;
display: flex;
justify-content: center;
align-items: center;
`

const Home = () => {
    return (
        <div>
           
  <OuterContainer>
  <GoingDown />
<HeaderImage>
        <div className='main-inner'>
      <GoingUp />
        <div id='' className='middle-part'>
        <MainText></MainText> <FlowerBloom/>
</div>
<GoingUp2 />
            </div></HeaderImage>
<GoingDown2 />

</OuterContainer>

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
