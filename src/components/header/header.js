import React, { useContext } from "react"
import { HomeContext } from "../../store/home-context.component"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const OuterMain = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 558px;
  width: 100%;
  left: 0px;
  top: 108px;
  background-color: #273420;
`

const HeaderImage = styled.div`
  width: 70%;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

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
  margin-top: 3vh;
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

  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`

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
