import React from 'react'
import styled from 'styled-components'

const MenuContainer =  styled.div`

width: 100vw;
min-height: 100vh;
padding: 5rem calc((100vw - 2000px)/2);
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
margin:0 4rem;
width: 300px;
`
const ProductImg = styled.img`
height: 270px;
min-width: 310px;
max-width: 100%;
margin-bottom: 2rem;
margin-top: 2rem;
`



const Gallery = ({ data}) => {
    return (
        <MenuContainer>
            <MenuWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key ={index}>
                            <ProductImg src={product.img} alt={product.img}/>
                            
                        </ProductCard>
                    )
                })}
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Gallery
