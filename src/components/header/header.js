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
              {home.title}
              <MiddlePart>{home.description}</MiddlePart>
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
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 500px) {
    background-position: center;
    height: 40%;
    padding-top: 320px;
    top: 150px;
  }
`

const MainInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  height: 100vh;  
  margin: 5vh;
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

const MiddlePart = styled.p`
  color: white;
  display: flex;
  text-align: left;
  align-items: left;
  font-size: 18px;
  width: 350px;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`

const MiddleText = styled.h2`
  color: white;
  display: flex;
  flex-flow: column;
  text-align: left;
  align-items: left;
  justify-content: flex-start;
  z-index: 999;


  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`
