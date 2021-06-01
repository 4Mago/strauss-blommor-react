import React, { useContext } from "react"
import { HomeContext } from "../../store/home-context.component"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"

const Header = () => {
  const { home } = useContext(HomeContext)
  return (
    <>
      <OuterMain>
        <HeaderImage
          alt="hero image"
          className="heroimage"
          id="heroimage"
          style={{ backgroundImage: `url(${urlFor(home.heroImage).url()})` }}
        >
          <ColorShade />
          <MainInner>
            <MiddleText>
              <MiddlePart2>{home.title}</MiddlePart2>
              <MiddlePart>{home.description}</MiddlePart>
              <Button href="/kontakt">Kontakta oss!</Button>
            </MiddleText>
          </MainInner>
        </HeaderImage>
      </OuterMain>
    </>
  )
}

export default Header

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const OuterMain = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  left: 0px;
  top: 108px;
  background-color: #273420;
`

const HeaderImage = styled.div`
  background-attachment: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 1400px) and (min-height: 900px)  { 
    height: 100vh;
    background-size: cover;
  }
  @media screen and (max-width: 1400px) and (min-height: 800px)  { 
    height: 100vh;
    background-size: cover;
  }

  @media screen and (max-width: 1070px)  { 
    height: 100vh;
    background-size: cover;
  }
`

const Button = styled.button`
    font-weight: 100;
    color: black;
    font-size: 1rem;
    width: 11.5rem;
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 0 10%;
    border-radius: 2rem;
    background: #273430;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 1rem 0.5rem;
    animation: animate 2s linear infinite;
`

const MainInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  height: 100vh;  
  margin: 5vh;
  z-index: 99;	  

  @media screen and (min-width: 1100px) {
    display: flex;
  text-align: center;
  align-items: center;
  width: 1100px;;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`

const ColorShade = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #273420;
  opacity: 60%;
  z-index: 10;
`

const MiddlePart = styled.div`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 18px;
  width: 350px;
  margin-top: 15px;


  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const MiddlePart2 = styled.p`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 36px;
  width: 350px;
  margin-top: 15px;

  @media screen and (min-width: 1100px) {
    width: 80%;
    font-size: 56px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const MiddleText = styled.h2`
  color: white;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: left;
  justify-content: center;
  z-index: 999;


  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 12%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    margin-left: 0;

  }
`
