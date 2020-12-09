import React, { useContext } from 'react'
import { HomeContext } from '../../store/home-context.component'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import GoingUp from '../parallax/goingUp'
import GoingUp2 from '../parallax/goingUp2'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const MainInner = styled.div`
    clear: both;
    display: grid;
    height: 100%;
    grid-template-columns: 0.3fr 11.4fr 0.3fr;
    bottom: 0;
`

const HeaderImage = styled.div`
    width: 90%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const MiddlePart = styled.p`
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20vh;
`

const MiddleText = styled.h2`
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20vh;
`

const Header = () => {
    const { home } = useContext(HomeContext)
    return (
        <>
        <HeaderImage
            alt='hero image'
            className='heroimage'
            id='heroimage'
            style={{backgroundImage:`url(${urlFor(home.heroImage).url()})`}}
        >
            <MainInner>
                <GoingUp />
    <MiddleText>{home.title}</MiddleText>
    <MiddlePart>{home.description}</MiddlePart>
                <GoingUp2 />
            </MainInner>
        </HeaderImage>
        </>
    )
}

export default Header
