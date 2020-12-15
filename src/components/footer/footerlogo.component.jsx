import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const MenuLink = styled(Link)`
text-decoration: none;
color: white;
`

const Container = styled.div`
	background-color: #273420;
    display: flex;
    flex-direction: column;
	justify-content: center;
    text-align: center;
    gap: 50px;
    /* @media screen and (max-width: 500px) {
    height: 320px;
    } */
`

const ImageDiv = styled.div`
    width: 135px;
    height: auto;
    margin: 0 auto;
    transition: 0.2s all ease;

    &:hover {
        transform: scale(1.1);
    }
`

const HeroImage = styled.img`
    width: 100%;

  
`

const A = styled.a`
`

const FooterLogo = () => {

	const [header, setHeader] = useState('')

	useEffect(() => {
		const headerQuery = `*[_type == "header"]{
			logo
		}`
		sanityClient.fetch(headerQuery).then(header => {
			header.forEach(header => {
				setHeader(header)
			})
		})

		return
	}, [])

	return (
		<Container>
            <A href='#'><ImageDiv><HeroImage className='App-logo' alt='TEMC Logo' src={urlFor(header.logo).url()} /></ImageDiv></A>

            <MenuLink>© Copyright Strauss Blommor 2020</MenuLink>
            <br />
        </Container>
	)
}

export default FooterLogo
