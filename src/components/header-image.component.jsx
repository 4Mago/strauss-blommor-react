import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 90%;
    height: 100%;
    background: center / cover no-repeat url('/images/strauss-bakgrudn.png');
    object-fit: cover;

`


const HeaderImage = (props) => {
    return (
        <Container>
            {props.children}
            
        </Container>
    )
}

export default HeaderImage
