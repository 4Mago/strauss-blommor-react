import React, { useContext } from "react"
import styled from "styled-components"
import { KontaktContext } from "../store/kontakt.context"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 100wv;
  height: auto;
  font-size: 36px;
  text-align: center;
  justify-content: center;
  color: #4a1f1f;
  font-family: poppins;
`

const SegmentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding: 15px;
  margin: 15px;
`

const Segment = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
`

const Photo = styled.img`
  width: 300px;
  height: 300px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
`
const Title = styled.h2`
  font-size: 36px;
  width: 400px;
  text-align: center;

  @media screen and (max-width: 400px) {
    width: auto;
  }
`
const Text = styled.p`
  font-size: 14px;
  width: 500px;
  padding: 15px;
  margin: 15px;
  text-align: center;
`

const Kontakt = () => {
  const { kontakt } = useContext(KontaktContext)

  return (
    <>
      <Container>
        <Title>{kontakt.title}</Title>
        <SegmentContainer>
          <Segment>
            <Text>{kontakt.description}</Text>
          </Segment>
          <Segment>
            <Photo
              alt="hero image"
              className="heroimage"
              id="heroimage"
              src={urlFor(kontakt.image).url()}
            />
            <Text />
          </Segment>
        </SegmentContainer>
      </Container>
    </>
  )
}
export default Kontakt
