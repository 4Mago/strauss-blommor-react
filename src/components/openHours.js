import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    opacity: 1; 
    transform: translateY(-30px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    `
const ImageContainer = styled.div`
    display: flex;
    width: 400px;
    height: 400px;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 10px;
    text-align: center;
`

const Icon = styled.img`
    width: 100px;
    transition: .5s;
    z-index: 2;
`


const OpenHours = () => {
    return (
        <Container>
        <ImageContainer>
        <Icon src="/images/henock_inkoner_05.png" alt=""></Icon>
        <span>  Open Hours </span>
        <br/>  Måndag - Fredag 10.00 - 18.30
        <br/>  Lördag 10.00 - 16.00
        </ImageContainer>
        <ImageContainer>
        <Icon src="/images/henock_inkoner_04.png" alt=""></Icon>
        <span class="page__info--title">Vår Butik </span>
        Strauss Blommor ligger på Södermalm i Stockholm <br/> (Södra station uppgång Rosenlundsgatan).
        <br />  Strauss Blommor, Rosenlundsgatan 32 C, 118 53 Stockholm
        </ImageContainer>
        <ImageContainer>
        <Icon src="/images/henock_inkoner_02.png" alt=""></Icon>
        <span class="page__info--title">Kontakt</span>
        Du kan nå oss via <a href='mailto:info@straussblommor.se'>Email</a>
        Eller ringa på <a href='tel:08-209840'>08-20 98 40</a>
        </ImageContainer>
        </Container>
)
}

export default OpenHours
