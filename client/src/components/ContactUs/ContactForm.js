import React from 'react'
import styled from 'styled-components'
import contact from '../../images/contact.png'

const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
background: #F8F1EB;
p{
    font-family: 'Montserrat';
    font-size:30px;
    text-align: center;
    margin: 10px;
    margin-left: 25%;
    margin-right: 25%
}
.responsive{
        
    width: 100%;
    max-width: 400px;
    height: auto;
}
`
;
const Container = styled.div`
padding: 3rem calc((100vw-1300px)/2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 500px;
margin-left: 5rem;
margin-right: 5rem;
margin-bottom: 100px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}`
;

const ColumnRight = styled.div`

padding: 1rem 3rem;
order:${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
border-radius: 10px;
background-color: #F1E1D3;
width: 90%;
margin-bottom: -15%;
margin-left: -20px;

    form{
        margin-top:10%;
    }
    input[type=text] {
        width: 100%;
        padding: 10px 10px;
        box-sizing: border-box;
    }
    input[type=subject] {
        width: 100%;
        padding: 40px 10px;
        box-sizing: border-box;
    }
    input[type=submit]{
        margin: 0px 0 0 350px;
        font-family: 'Montserrat';
        font-size: 100%;
        color: white;
        background-color:#B2784A;
        width: 100px;
    }
    li{
        font-family: 'Montserrat';
        font-size: 100%;
        list-style-type:none;
        margin-bottom: 20px;
        
    }
    
   `

const ColumnLeft = styled.div`

display:flex;
flex-direction: column;
align-items: center;

padding: 1rem 2rem;
order:${({reverse}) => (reverse ? '2' : '1')} ;
margin-left: 100px;

    @media screen and (max-width:768px){
        order:${({reverse}) => (reverse ? '1' : '2')};
    }
    
        img{
            width: 80%;
            height: auto;
            object-fit: cover;
    
            @media screen and (max-width: 768){
                width: 90%;
                height: 90%;
            }
        
        }
        `
        



const ContactForm = ({heading , reverse, image}) => {
    return (
        <Section className="responsive">
            <p>Have any Questions? Concerns? Feedback? </p>
            <p>Feel free to leave us a message down below! </p>
            <Container>
               
                <ColumnRight >
                <h1>{heading}</h1>
                <form form = "Contact_form"  >
                    
                        <li><label htmlFor="for">Name: <input type="text" name="userid" placeholder="Enter your Name"/></label></li>
                        <li><label htmlFor="for"/>Email: <input type="text" placeholder="Enter your Email Address"/></li>
                        <li><label htmlFor="for"/> Phone Number: <input type="text" placeholder="Enter your Phone Number"/></li>
                        <li><label htmlFor="for"/> Message: <input type="subject" placeholder="Enter your Message/Concern"/></li>
                        <li><input type="submit" value="Submit"/> </li>
                    
                </form>
                </ColumnRight>
                <ColumnLeft reverse = {reverse}>
                    
                <img src={contact} alt="the baker" className="responsive"/>
                </ColumnLeft>
            

            </Container>
        </Section>
    )
}

export default ContactForm