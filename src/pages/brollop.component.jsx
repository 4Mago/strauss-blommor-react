import React, { useContext } from 'react'
import styled from 'styled-components'
import { BrollopContext } from '../store/brollop.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
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

const Brollop = () => {
    
    const { brollop } = useContext(BrollopContext)

    return (
        <>
				{brollop
					? brollop.map((item, id) => (
							<Container key={id}>
                                <Text>{item.title}</Text>

        <SegmentContainer>
        <Segment>						
                <Photo
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(item.image).url()}
						/>          
            <Text />
        </Segment>
        <Segment>
                <Photo
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(item.image).url()}
						/>
            <Text />
        </Segment>
    </SegmentContainer>
    </Container>
                    ))
                    :null }
        </>
    )
}
export default Brollop
