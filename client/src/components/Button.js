import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};

    &:hover{
        transform: translateY() (-2px);
    }
`;

export const Button1 = styled(Link)`
    font-size: 1rem;
    padding:  1rem 4rem;
    border: none;
    background: #B2784A;
    color: #fff;
    transition: 0.2 ease-out;
    border-radius: 7px;

    &:hover{
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const ButtonFooter = styled.button`
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
    padding: 12px 96px;
    border-radius: 7px;
    margin-right: 10px;
    border: none;
    background: #B2784A;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const CartButton = styled(Link)`
    font-size: 1rem;
    padding:  10px 1.5rem;
    border: none;
    background: #B2784A;
    color: #fff;
    transition: 0.2 ease-out;
    border-radius: 3px;
    margin-right: 4px;
    

    &:hover{
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const Button2 = styled.button`
    font-size: 1rem;
    padding:  1rem 4rem;
    border: none;
    background: #B2784A;
    color: #fff;
    transition: 0.2 ease-out;
    border-radius: 7px;
`