import React from 'react'
import styled from 'styled-components'
import InfoSection from '../components/AboutTheBaker/InfoSection';
import { InfoData } from '../data/InfoData';
import motto from '../images/banner1.jpeg'



function About () {
    return (
        <>
            <Banner3 />
          
            <InfoSection {...InfoData}/>
            
        </>
      )
}

export default About;

const BannerContainer = styled.div`
    background: url(${motto});
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
    font-weight: 500;
    font-family: 'Abril Fatface';
    color: #59371C;
}
`



const Banner3 = () => {
    return (
        <BannerContainer>
            
            <h2>About The Baker!</h2>
            
            
        </BannerContainer>
    )
}





