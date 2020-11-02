import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	height: auto;
	background: #273420;
	color: #ffffff;
`
const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: auto;
}
`

const Socials = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 15px;
	height: 125px;
	flex-direction: column;
`

const Img = styled.img`
	height: 50px;
	width: 50px;
	padding: 2px;
`
const InfoContainer = styled.div`
	padding: 15px;
	display: flex;
	flex-flow: column;
	height: auto;
`
const InfoHeader = styled.h4``
const InfoText = styled.p``
const InfoLink = styled(Link)`
	text-decoration: none;
	color: white;
`

const Footer = () => {
	return (
		<Container>
			<NavContainer>
				<InfoContainer>
					<InfoHeader>Öppettider</InfoHeader>
					<InfoText>
						Måndag - fredag 10.00 - 18.30 <br></br> Lördag 10.00 - 16.00
					</InfoText>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Navigation</InfoHeader>
					<InfoLink to='/buketter'>Buketter</InfoLink>
					<InfoLink to='/begravning'>Begravning</InfoLink>
					<InfoLink to='/brollop'>Bröllop</InfoLink>
					<InfoLink to='/kontakt'>Kontakt</InfoLink>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Företagstjänster</InfoHeader>
					<InfoLink to='/bestallningar'>Beställningar</InfoLink>
					<InfoLink to='/event'>Event</InfoLink>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>Adress</InfoHeader>
					<InfoText>
						Strauss Blommor <br></br>
						Rosenlundsgatan 32 C <br></br>
						118 53 Stockholm
					</InfoText>
				</InfoContainer>
			</NavContainer>
			<Socials>
				<h2>Socials</h2>
				<div>
					<Img alt='hej' src='/images/facebook.png'></Img>
					<Img alt='hej' src='/images/instagram.png'></Img>
					<Img alt='hej' src='/images/linkedin.png'></Img>
				</div>
			</Socials>
		</Container>
	)
}

export default Footer
