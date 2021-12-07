
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import prod1 from '../../images/mango.JPG'
import { CartButton } from '../Button'


const CartContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
 
`
const CartWrapper= styled.div`
    padding: 20px;
    margin-top: 1rem;
    @media screen and (max-width: 380px){
     display: none;
    }
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    color:#59371C;
`
const Top = styled.div`
     display: flex;
   
`


const SubTotal = styled.span`
display: flex;
flex: 2;
justify-content: right;
`
const SubTotalTitle = styled.span`
padding: 10px;
font-size: 30px;
`
const SubTotalAmount = styled.span`
padding: 10px;
font-size: 30px;

`
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 20px;
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 780px){
     flex-direction: column;
    }
`
const ProductDetail = styled.div`
    flex:1;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
 font-size: 1.5rem;
`
const ProductID = styled.span``
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media only screen and (max-width: 780px){
     margin: 5px 15px;
    }
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #DBBC9C;
    border: none;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
const TotalAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media only screen and (max-width: 780px){
     align-items: center;
     justify-content: center;
    }
`
const TotalAmount = styled.div`
    margin: 5px;
    font-size: 30px;
    font-weight: 200;

  
`
const HeaderInfo = styled.div`
    flex: 3;
    margin-bottom: -2rem;
`

const HeaderProduct = styled.div`
    display: flex;
    justify-content: space-between;
`
const HeaderProductDetail = styled.div`
    flex:1;
    display: flex;
`

const HeaderDetails = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const HeaderProductName = styled.span`
 font-size: 20px;
`

const HeaderPriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const HeaderProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const HeaderProductAmount = styled.div`
    font-size: 20px;
    margin: 5px;
`


const HeaderTotalAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const HeaderTotalAmount = styled.div`
    margin: 5px;
    font-size: 20px;
    font-weight: 200;
  
`
const cart = () => {
    return (
        <CartContainer>
            <CartWrapper>
                <Title>Shopping Cart</Title>

                    <HeaderInfo>
                       <HeaderProduct>
                        <HeaderProductDetail>
                            <HeaderDetails>
                                <HeaderProductName>PRODUCT</HeaderProductName>
                            </HeaderDetails>
                        </HeaderProductDetail>
                        <HeaderPriceDetail>
                            <HeaderProductAmountContainer>
                                <HeaderProductAmount>QUANTITY</HeaderProductAmount>
                            </HeaderProductAmountContainer>
                        </HeaderPriceDetail>
                        <HeaderTotalAmountContainer>
                                <HeaderTotalAmount>TOTAL</HeaderTotalAmount>
                        </HeaderTotalAmountContainer>
                       </HeaderProduct>
                    </HeaderInfo>
              
                <Hr/>
                
                <Top>
                    <Info>
                       <Product>
                        <ProductDetail>
                            <Image src={prod1}/>
                            <Details>
                                <ProductName><b>Product:</b> Mango Mille Crepe</ProductName>
                                <ProductID><b>Price:</b> P900</ProductID>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            
                            <ProductPrice>P900.00</ProductPrice>
                        </PriceDetail>
                        <TotalAmountContainer>
                                <TotalAmount>P900</TotalAmount>
                        </TotalAmountContainer>
                       </Product>
                    </Info>
                </Top>
                <Hr/>
                <SubTotal>
                <SubTotalTitle>SUBTOTAL: </SubTotalTitle>
                <SubTotalAmount>P900</SubTotalAmount>
                </SubTotal>
                <Bottom>
                    <CartButton to='/shop'>CONTINUE SHOPPING</CartButton>
                    <CartButton to='/cakedetailsform'>CHECKOUT</CartButton>
                </Bottom>
                
            </CartWrapper>
        </CartContainer>
       
    )
}

export default cart
