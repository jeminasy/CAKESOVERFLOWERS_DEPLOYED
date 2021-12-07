
import React from 'react'
import styled from 'styled-components'
import { Button1 } from './Button'

const MenuContainer =  styled.div`

    width: 100vw;
    min-height: 85vh;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
  
`

const MenuWrapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

const ProductCard = styled.div`
    margin:0 2rem;
    width: 300px;
    `
const ProductImg = styled.img`
    height: 270px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #DCC4AC;
    margin-top: 2rem;
    `
const MenuHeading = styled.h1`
    font-size: clamp(5rem, 3vw, 6rem);
    text-align: center;
    margin-bottom: -1rem;
    color:#59371C;
    font-family:'Cormorant Garamond', serif; 
    font-style: italic;
    font-weight: 100;
`

const ProductTitle = styled.h2`
font-weight: 600;
font-size: 1.5rem;

`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

const ProductDesc = styled.p`
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
`
const Bestseller = ({heading, data}) => {
    return (
        <MenuContainer>
            <MenuHeading>{heading}</MenuHeading>
            <MenuWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key ={index}>
                            <ProductImg src={product.img} alt={product.img}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <Button1 to={product.path}>{product.button}</Button1>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Bestseller
