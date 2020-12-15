import React, { useContext } from 'react'
import styled from 'styled-components'
import { BuketterContext } from '../store/buketter.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-size: 36px;
    text-align: center;
    justify-content: center;
    color: #f58888;
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
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    `
const Text = styled.div`
    padding: 15px;
    margin: 15px;
    text-align: center;
`

const Buketter = () => {
    
    const { buketter } = useContext(BuketterContext)

    return (
    <Container>
    <Text>{buketter.title}</Text>
                <Photo
							alt='hero image'
							className='heroimage'
							id='heroimage'
                            style={{backgroundImage:`url(${urlFor(buketter.heroImage).url()})`}}
                            />          
        <SegmentContainer>
        <Segment>						
            <Text />
        </Segment>
        <Segment>
                <Photo
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(buketter.image).url()}
						/>
            <Text>{buketter.description}</Text>
        </Segment>
    </SegmentContainer>
        </Container>
    )
}
export default Buketter