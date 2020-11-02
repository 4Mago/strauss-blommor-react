import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
clear: both;
display: flex;
justify-content: space-between;
height: 100px;
bottom: 0;
background: #ffebecd7;
}
`

const Socials = styled.div`
display: flex;
justify-content: flex-start;
padding: 15px;
height: 150px;
background: #ffebecd7;
flex-direction: column;
`

const Img = styled.img`
  height: 50px;
  width: 50px;
`

const Left = styled.text`
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

const Right = styled.text`
  padding: 20px;
  text-align: right;
  font-family: poppins;
`

const Footer = () => {
    return (
      <div>
  <Container>
    <Left>
    <h3>Öppettider</h3>
        <br/>  Måndag - Fredag 10.00 - 18.30
        <br/>  Lördag 10.00 - 16.00
    </Left>
    <CenterLeft>
      <h3>Navigation</h3>
    </CenterLeft>
    <div className='middle'></div>
    <CenterRight>
      <h3>Företag</h3>
    </CenterRight>
    <Right>
    <h3>Strauss Blommor</h3> 
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
