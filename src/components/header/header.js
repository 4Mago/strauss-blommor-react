import React, { useContext } from 'react'
import { HomeContext } from '../../store/home-context.component'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const OuterMain = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    height: 558px;
    width: 1440px;
    left: 0px;
    top: 108px;
    background-color: #273420;
`

const HeaderImage = styled.div`
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`

const MainInner = styled.div`
    display: flex;

`

const MiddlePart = styled.p`
    color: white;
    display: flex;
    text-align: left;
    align-items: left;
    font-size: 18px;
    width: 350px;
    margin-top: 15px;
`

const MiddleText = styled.h2`
    color: white;
    display: flex;
    flex-flow: column;
    text-align: left;
    align-items: left;
    justify-content: flex-start;
    margin: 20vh;
`

const Header = () => {
    const { home } = useContext(HomeContext)
    return (
        <>
        <OuterMain>
        <HeaderImage
            alt='hero image'
            className='heroimage'
            id='heroimage'
            style={{backgroundImage:`url(${urlFor(home.heroImage).url()})`}}
            >
            <MainInner>
            <MiddleText>{home.title}
                <MiddlePart>{home.description}</MiddlePart>
            </MiddleText>
            </MainInner>
        </HeaderImage>
        </OuterMain>
        </>
    )
}

export default Header
