import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
clear: both;
display: flex;
justify-content: space-between;
height: 100px;
bottom: 0;
background: #273420;
color: #ffffff;
}
`

const Socials = styled.div`
display: flex;
justify-content: flex-start;
padding: 15px;
height: 150px;
background: #273420;
flex-direction: column;
color: #ffffff;
`

const Img = styled.img`
  height: 50px;
  width: 50px;
  padding: 2px;
`

const Left = styled.div`
  padding: 15px;
  text-align: left;
  font-family: poppins;
`
const CenterLeft = styled.div`
padding: 15px;

`

const CenterRight = styled.div`
padding: 15px;

`

const Right = styled.div`
  padding: 20px;
  text-align: right;
  font-family: poppins;
`

const Footer = () => {
    return (
      <div>
  <Container>
    <Left>
    <h4>Öppettider</h4>
        <br/>  Måndag - Fredag 10.00 - 18.30
        <br/>  Lördag 10.00 - 16.00
    </Left>
    <CenterLeft>
      <h4>Navigation</h4>
      Buketter
      <br />Begravning
      <br />Bröllop
      <br />Kontakt
    </CenterLeft>
    <div className='middle'></div>
    <CenterRight>
      <h4>Företagstjänster</h4>
      Beställningar
      <br />Event
      <br />
    </CenterRight>
    <Right>
    <h4>Adress</h4>
    Strauss Blommor
    <br />Rosenlundsgatan 32 C
    <br />118 53 Stockholm
    </Right>
    </Container>
    <Socials>
      <br></br>
      <h2>Socials</h2>
      <div>
      <Img alt='hej' src='/images/facebook.png'></Img>
      <Img alt='hej' src='/images/instagram.png'></Img>
      <Img alt='hej' src='/images/linkedin.png'></Img>
      </div>
    </Socials>
    </div>
    )
}

export default Footer
