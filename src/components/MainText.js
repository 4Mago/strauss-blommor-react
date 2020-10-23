import React, { useState, useEffect } from 'react'
import '../components/the-big-file.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 0px 25px 25px 25px;
`

const ContainerTitle = styled.div`
    text-align: left;
    left: 0;
    color: #ffffff;
    font-size: 54px;
    }
    p {
            text-align: left;
            left: 0;
            font-size: 22px;
            color: white;   
    }

    @media (max-width: 960px)   
    font-size: 36px;
    text-align: center;
    }
     p {
            font-size: 18px;
            text-align: center;
        }
    }
`

function MainText() {
	return (
		<Container>
			<ContainerTitle>
				<h2> Sänd blombud genom oss!</h2>
				<div className='input-field'>
					<p>
						Fyll i adressen till en närstående och välj ut en bukett från
						hemsidan.
						<br />
						<input />
						<Link to='/buketter'>
							<button />
						</Link>
					</p>
				</div>

				<div className='main-text parallax-title2'>
					<br></br>
					<p>
						Visa uppskattning till dina nära och kära genom att skicka en
						bukett!<br></br> Vilda säsongsbuketter och lite godbitar inom
						present och inredning.
						<br></br>Strauss Blommor ligger på Rosenlundsgatan 32 C på Södermalm
						i <br></br> Stockholm (pendel Södra station/t-bana Mariatorget).{' '}
					</p>
				</div>
			</ContainerTitle>
		</Container>
	)
}

export default MainText
