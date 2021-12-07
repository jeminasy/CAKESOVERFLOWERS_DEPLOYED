import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import logo from '../images/LOGO.PNG';
import { PersonOutlineOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Nav = styled.nav`
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((90vw - 900px)/2);
    z-index: 10;
    position: absolute;
    width: 100%;
    background: #F6EEE0;
    border-bottom:  4px solid #7a4850;;
`;

const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 90%;
   
    &.active{
        color: #DF744A;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        // transform: scale(1.3);
        color: #DF744A;
    }
`

const Logo = styled(Link)`
    background: url(${logo}) 0 45% no-repeat;
    border-radius: 4px;
    background-size: 100% 100%;
    padding: 20px 28px;
    color: #fff;
    border: none;
    outline: none;
    cursor:pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    margin-left: 4rem;

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.5);
    }

    @media screen and (max-width:768px){
        margin-left: 1rem;
    }
`;

const Icon = styled.div`
    display:none;
    color: #B2784A;

    @media screen and (max-width:768px){
        display:block;
        cursor: pointer;
        position: absolute;
        top:0px;
        right: 0;
        transform: translate(-100%, 10%);
        font-size:1.8rem;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    
    

    @media screen and (max-width:768px){
        display:none;
    }
`;


const Cart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
   margin-right: 0rem;
    
    
    
    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.3);
    }

    @media screen and (max-width:768px){
        display:none;
    }
`
const Login = styled.div`
    
    align-items: center;
    cursor: pointer;
    margin-right: -1.5rem;
    margin-left: 2rem;
    
   
    
    
    
    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.3);
    }

    @media screen and (max-width:768px){
        display:none;
    }
`

const Navbar = ({ toggle }) => {
    return (
        <Nav >
            <Logo to="/">
             
            </Logo>
            <Icon onClick={toggle}>
            <FaBars  />
            </Icon>
            <NavMenu>
                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/customize">Customize</NavLink>
                <NavLink to="/gallery" >Gallery</NavLink>
                <NavLink to="/contactUs" >Contact Us</NavLink>
                
            <NavLink to = "/login">
            <Login>
            <Badge color="primary">
                <PersonOutlineOutlined color="action" onClick="dropDown()" />
                
            </Badge>
            </Login>
                

            </NavLink>
            <NavLink to = "/cart">
            <Cart>
            <Badge color="primary">
                <ShoppingCartOutlined color="action" />
            </Badge>
            </Cart>
            </NavLink>
            
            </NavMenu>
            
            
        </Nav>
    )

    
}

export default Navbar
