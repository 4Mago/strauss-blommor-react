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
import SlopeFigure from "../components/slopeFigure"

const Home = () => {
    return (
        <div>
           
  <div className='outer-container'>
  <GoingDown />
 <div className='main-outer'>
      <div className='main-inner'>
      <GoingUp />
        <div id='' className='middle-part'>
        {/* <div className='logo-box'><img className='logo' alt='logo' src='/images/strauss-logo.png'></img></div> */}
        <MainText></MainText> <FlowerBloom/>
</div>
<GoingUp2 />
            </div></div>
<GoingDown2 />

</div>

<div><div className='vertical-space-inbetween'></div>
<div className='POWR-blocker-container'><div className="powr-instagram-feed" id="0ea62b8c_1602840170"></div><div className='POWR-blocker'></div>
</div>
</div>
<GreetingText></GreetingText>
<SlopeFigure />
       

    <div className='vertical-space-inbetween1'></div>
    <div className='vertical-space-inbetween2'></div>
    <div className='vertical-space-inbetween3'></div>
    <div className='vertical-space-inbetween4'></div>
        </div>
    )
}

export default Home
