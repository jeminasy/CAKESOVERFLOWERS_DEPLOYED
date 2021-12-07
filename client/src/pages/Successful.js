import React from 'react';
import styled from 'styled-components'



const Section = styled.section`
width: 100vw;
min-height: 100%;
padding: 4rem 0rem;
background: #F8F1EB;
p{
    font-family: 'Montserrat';
    font-size:12px;
}


`;

const Container = styled.div`
padding: 3rem calc((100vw - 900px)/2);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 500px;
margin-top: 200px;

@media screen and (max-width: 768px){
   
}


`;

   
export default function Successful() {
    return (
<Section >
<Container>
  <h1>You have successfully placed your order!</h1>
  <h1>Please check your email for confirmation.</h1>
</Container>
</Section>
        );
    }