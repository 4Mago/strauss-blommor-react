import React, { useContext } from 'react'
import styled from 'styled-components'
import { KontaktContext } from '../store/kontakt.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
    background: center / cover no-repeat url(/images/rose-brollop.jpg);
    width: 100wv;
    height: 385px;
    font-size: 36px;
    text-align: center;
    justify-content: center;
    color: #4A1F1F;
    font-family: poppins;

    h1 {
        padding-top: 35px;
    }
`

const SegmentContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    gap: 10px;
    padding: 15px;
    margin: 15px;
`

const Segment = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Photo = styled.div`
    width: 300px;
    height: 300px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    `
const Text = styled.div`
    padding: 15px;
    margin: 15px;
    text-align: center;
`

const Kontakt = () => {

    const { kontakt } = useContext(KontaktContext)
    
    return (
        <div>
        <Container>
            <h1>{kontakt.title}</h1>
        </Container>
        <SegmentContainer>
        <Segment>						
                <Photo
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(kontakt.image).url()}
						/>          
            <Text />
        </Segment>
        <Segment>
                <Photo
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(kontakt.image).url()}
						/>
            <Text />
        </Segment>
        </SegmentContainer>
        </div>
    )
}
export default Kontakt
