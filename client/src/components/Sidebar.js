import React from 'react'
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
export const Container = styled.div`
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #D8B99C;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0ms.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
    color:#fff;

`

const Icon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`
const Wrapper = styled.div`
    color:#fff;
   
`

const Menu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: (6,60px);

    }
`
const NavLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style:none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color:#DF744A;
        transition: 0.2s ease-in-out;
    }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
` 
const Route = styled(Link)`
    border-radius: 50px;
    background: #B2784A;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size:16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

const Sidebar = ({isOpen, toggle}) => {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <Wrapper>
                <Menu>
                    <NavLink to ="/home">Home</NavLink>
                    <NavLink to ="/about">About</NavLink>
                    <NavLink to ="/shop">Shop</NavLink>
                    <NavLink to ="/customize">Customize</NavLink>
                    <NavLink to ="/gallery">Gallery</NavLink>
                    <NavLink to ="/contactUs">Contact Us</NavLink>
                    <NavLink to = "/cart">
        
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
            </Badge>
           
            </NavLink>
                    <BtnWrap>
                    <Route to="/login">Sign In</Route>
                </BtnWrap>
                </Menu>
                
            </Wrapper>
        </Container>
    )
}

export default Sidebar;
