import React from 'react'
import './the-big-file.css'

function GreetingText() {

    let atScroll = false;
let parallaxTitle = document.querySelectorAll('.parallax-title')

const scrollProgress = () => {
  atScroll = true;
}

const raf = () => {
  if(atScroll) {
    parallaxTitle.forEach((element, index) => {
      element.style.transform = 'translateY(-' + window.scrollY / 2 + 'px)'
    })
    atScroll = false
  }
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
window.addEventListener('scroll', scrollProgress)

    return (
        <div>
            <div className='greeting-container'>
              <div className='greeting-background'>
  <div className='greeting-text' id='h1' data-speed='1.5'>


  <div className='parallax-title'><h2> Skicka blommor med oss!</h2> </div>

  <p><div className='parallax-title'>Vi älskar gröna växter (både traditionella och lite annorlunda), <br></br> vilda säsongsbuketter och lite godbitar inom present och inredning. 
  <br>
  </br>Strauss Blommor ligger på Rosenlundsgatan 32 C på Södermalm i <br></br> Stockholm (pendel Södra station/t-bana Mariatorget). </div></p>
  </div>
  </div>
     </div>
        </div>
    )
}

export default GreetingText