import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
clear: both;
display: grid;
height: 100px;
grid-template-columns: 3fr 6fr 3fr;
bottom: 0;
background: #ffebecd7;
}
`

const Left = styled.text`
  padding: 15px 15px px 15px;
  text-align: left;
`

const Right = styled.text`
  padding: 20px;
  text-align: right;
`

const Footer = () => {
    return (
  <Container>
    <Left>
    <span>  Open Hours </span>
        <br/>  Måndag - Fredag 10.00 - 18.30
        <br/>  Lördag 10.00 - 16.00
    </Left>
    <div className='middle'>
      
    </div>
    <Right>
    Strauss Blommor 
    <br />Rosenlundsgatan 32 C
    <br />118 53 Stockholm
    </Right>
    </Container>
    )
}

export default Footer
