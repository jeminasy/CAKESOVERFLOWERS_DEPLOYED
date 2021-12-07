import React from 'react'
import styled from 'styled-components'
import { ButtonFooter } from './Button';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/LOGO.PNG';
import {FiInstagram} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'
import {BiTimeFive} from 'react-icons/bi'
import {IoIosContact} from 'react-icons/io'
const FooterContainer=styled.div`
    background-color: #F6EEE0;
    padding: 4rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 


@media screen and (max-width:820px){
    flex-direction: column;
    width: 80%;
}
`

const FormInput = styled.input`
    padding: 10px 30px;
    border-radius: 7px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border:1px solid #000;

&::placeholder{
    color:#242424;
}

@media screen and (max-width:820 px){
    width: 100% ;
    margin: 0 0 16px 0;
}
`
const FooterLinksContainer = styled.div`
    width: 190%;
    max-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
 

    @media screen and (max-width: 820px){
        padding-top: 32px;

    }

`
const FooterLinksWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 190px;
    box-sizing: border-box;
    color: #000;
    

    @media screen and (max-width: 420){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

`
const FooterSubs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    width: 420px;
    box-sizing: border-box;
    color: #000;
   

    @media screen and (max-width: 420){
        margin: 0;
        padding: 10px;
        width: 100%;
  
    }

`
const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
    font-weight: 700;
`
const FooterSubTitle = styled.h3`
    margin-bottom: 16px;
    font-weight: 100;
    font-size: 20px;
`
const FooterLink = styled(NavLink)`
    color:#000;
    text-decoration: none;
    margin-bottom: 0.5rem;
    margin-right: -5rem;
    line-height: 1.5rem;
    

&:hover{
    color: #DF744A;
    transition: 0.3s ease-out;
}
`

const WebRights = styled.section`
    max-width: 1000px;
    width: 100%;

`

const WebRightsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 50px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
const Logo = styled(Link)`
    color: #000;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-style: italic;
`
const LogoIcon= styled.img`
    border-radius: 4px;
    height: 1.5rem;
    width: 2.2rem;
    border: none;
    outline: none;
    cursor:pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    margin-right: 5px;

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.5);
    }
`

const Rights= styled.small`
    color: #000;
    margin-bottom: 16px ;
`

const Footer = () => {
    return (
        <FooterContainer>
            
            <FooterLinksContainer>
                <FooterLinksWrapper>
                
                
                <FooterSubs>
                        <FooterLinkTitle>NEWSLETTER</FooterLinkTitle>
                        <FooterSubTitle>Stay updated with our news and promos! </FooterSubTitle>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        <ButtonFooter fontbig>Subscribe</ButtonFooter>
                        
                    </Form>
                </FooterSubs>
               
                    <FooterLinksItems>
                        <FooterLinkTitle>CONNECT</FooterLinkTitle>
                        <FooterLink to='/home'>Home</FooterLink>
                        <FooterLink to='/about'>About</FooterLink>
                        <FooterLink to='/shop'>Shop</FooterLink>
                        <FooterLink to='/gallery'>Gallery</FooterLink>
                        <FooterLink to='/contactUs'>Contact Us</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>EXPLORE</FooterLinkTitle>
                        <FooterLink to='/contactUs'><IoIosContact/> Contact us</FooterLink>
                        <FooterLink to='/contactUs'><HiOutlineMail/> cakesoverflowers@gmail.com</FooterLink>
                        <FooterLink to='/contactUs'><BiPhone/> 09981705214</FooterLink>
                        <FooterLink to= {{ pathname: 'https://www.instagram.com/cakesoverflowers/'}} target="_blank"><FiInstagram/> cakesoverflowers</FooterLink>
                        <FooterLink to='/contactUs'><BiTimeFive/> 9AM-6PM(GMT+8)</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <WebRights>
                
                <WebRightsWrapper>
                <Logo to ="/">
                    <LogoIcon src={logo} alt="logo"/>
                    Cakes Over Flowers
                </Logo>
                    <Rights>Group 2 - 3ISB © 2021.</Rights>
                </WebRightsWrapper>    
            </WebRights> 
        </FooterContainer>
    )
}

export default Footer
