import React from 'react'

function MainText() {

        let atScroll = false;
    let parallaxTitle = document.querySelectorAll('.parallax-title2')
    
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
            <div className='main-container'>
  <div className='main-text' id='h1' data-speed='1.5'>


  <div className='parallax-title2'><h2> Sänd blombud genom oss!</h2> </div>
  <div className='input-field'><p>Fyll i adressen till en närstående och välj ut en bukett från hemsidan.<br /><input/></p></div>

  <div className='main-text parallax-title2'><br></br><p>Visa uppskattning till dina nära och kära genom att skicka en bukett! <br></br> Vilda säsongsbuketter och lite godbitar inom present och inredning. 
  <br>
  </br>Strauss Blommor ligger på Rosenlundsgatan 32 C på Södermalm i <br></br> Stockholm (pendel Södra station/t-bana Mariatorget). </p></div>
  </div>
     </div>
        </div>
    )
}

export default MainText