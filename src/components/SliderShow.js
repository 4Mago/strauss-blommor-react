import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Blocker = styled.div`
height: 66px;
width: 100%;
background: white;
bottom: 0;
transform: translateY(-90px);
z-index: 999;
display: flex;
justify-content: center;
align-items: center;

    @media screen and (max-width: 900px) {
        height: 110px;
        transform: translateY(-130px);
    }
`

const SliderShow = () => {
    return (
        <Container>
            <div className="powr-instagram-feed" id="0ea62b8c_1602840170">
            </div>
            
            <Blocker />
        </Container>
    )
}

export default SliderShow
