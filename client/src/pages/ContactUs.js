import React from 'react'
import styled from 'styled-components'
import motto from '../images/MOTTO.jpeg'
import ContactForm from '../components/ContactUs/ContactForm';


function ContactUs () {
    return (
        <>
          <Banner4/>
          <ContactForm/>

        </>
      )
}

export default ContactUs;

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
    margin-top: 3rem;
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    font-family: 'Abril Fatface';
 
    color: #59371C;
}

p{
    margin-top: 3rem; 
      font-size:clamp(1rem, 3vw, 2rem);
      font-weight: 100;
    color: #59371C;
    
  }
  
`

const Banner4 = () => {
    return (
        <BannerContainer>
            
            <h2>Contact Us!</h2>
            <p> 09178570190 | cakesoverflower@gmail.com</p>

        </BannerContainer>
    )
}