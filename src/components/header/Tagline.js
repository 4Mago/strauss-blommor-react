import React, { useContext } from 'react'
import { HomeContext } from '../../store/home-context.component'
import styled from 'styled-components'

const TaglineDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-flow: column;
    gap: 22px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const TaglineTitle = styled.h2`
`

const TaglineText = styled.p`
    color: black;
    width: 550px;

    @media screen and (max-width: 500) {
        width: 100%;
    }`



const Tagline = () => {

    const { home } = useContext(HomeContext)

    return (
        <> 
            <TaglineDiv>
                <TaglineTitle>{home.title}</TaglineTitle>
                <TaglineText>{home.description2}</TaglineText>
            </TaglineDiv>
        </>
    )
}

export default Tagline
