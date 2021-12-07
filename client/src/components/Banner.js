import React from 'react'
import styled from 'styled-components'
import ourcake from '../images/OURCAKES.jpeg'
import { Button1 } from './Button'

const BannerContainer = styled.div`
    background: url(${ourcake});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    padding: 0 1rem;
    border-bottom: 4px solid #7a4850;
    border-top: 4px solid #7a4850;
   
    
h2{
    font-size: clamp(3rem, 5vw, 5rem);
    font-family: 'Cormorant Garamond', serif;
    font-weight: 100;
    font-style: italic;
}
h3{
    margin-top: 2rem;
    margin-bottom: 2.8rem;
    font-size:clamp(1rem, 3vw, 2rem);
    font-weight: 100;
}
`



const Banner = () => {
    return (
        <BannerContainer>
            
            <h2>Our Cakes</h2>
            <h3>Made for something special</h3>
            <Button1 to='/shop'>Order Now </Button1>
        </BannerContainer>
    )
}

export default Banner
