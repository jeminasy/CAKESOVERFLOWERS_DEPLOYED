import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import prod1 from '../../images/mango.JPG'
import { CartButton } from '../Button';
import "../index.css";

const Container = styled.div`
    min-height: 50vh;
    position: relative;
    
    z-index: 0;
    overflow: hidden;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
    padding-left: 30px;
`
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
font-size: 20px;
`
const SubTotalAmount = styled.span`
padding: 10px;
font-size: 25px;
`
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 20px;
`
const Info = styled.div`
    flex: 3;

    // width: 100%;
`
const Product = styled.div`
    padding-bottom: 40px;
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
    object-fit: cover;
    height: 200px;
    width: 200px;
    box-shadow: 4px 4px #DCC4AC;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
 font-size: 1.3rem;
`
const CustomName = styled.span`
 font-size: 1rem;
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
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #B2784A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
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
    font-size: 22px;
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

const CartScreen = ({ history }) => {
    const [ error, setError ] = useState("");
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetchCartData();
    }, []);

    const fetchCartData = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        axios
            .get('/cart/view', config)
            .then((res) => {
                console.log(res);
                setItems(res.data);
            })
            .catch((error) => {
                localStorage.removeItem("authToken");
                console.log(error);
                setError("Please login to continue");
            });
    }

    function incByOne(id){
        let item = id;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            axios.put(
                '/cart/incByOne',
                {
                    item
                }, config
            );
            window.location.reload(false);
            console.log(item);
        } catch(error) {
            console.log(error);
        }
    };

    function decByOne(id){
        let item = id;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            axios.put(
                '/cart/decByOne',
                {
                    item
                }, config
            );
            window.location.reload(false);
            console.log(item);
        } catch(error) {
            console.log(error);
        }
    };
    let subtotal = parseInt(0);
    function getsubTotal(){
        for (let x=0; x<items.length; x++){
            subtotal += items[x].amount;
            console.log(subtotal);
        }
        document.getElementById('subtotalAmount').innerHTML = "₱" + subtotal;
    }
    setTimeout(getsubTotal, 5000);

    return error? (
        <>
        <Container>
            <div>
                <span className="error-message">{error}</span>
            </div>
            <button className="btn btn-please__login">
                <Link to="/login">Log in</Link>
            </button>
        </Container>
        </>
    ) : (
        <CartContainer>
            <Title>Shopping Cart</Title>
            <CartWrapper>
            
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
                {items.map((item) => (
                    <Product key={item._id}>
                        <ProductDetail>
                            <Image src={item.img} />
                            <Details>
                                <ProductName>{item.productName}</ProductName>
                                <CustomName>{item.baseName}</CustomName>
                                <CustomName>{item.frostingName}</CustomName>
                                <CustomName>{item.addonName}</CustomName>
                                <CustomName>{item.designName}</CustomName>
                                <ProductID><b>Price:</b> ₱{item.price}</ProductID>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <button className="btn-add__remove" onClick={() => decByOne(item._id)}><Remove /></button>
                                <ProductAmount id="quantity">{item.quantity}</ProductAmount>
                                <button className="btn-add__remove" onClick={() => incByOne(item._id)}><Add /></button>
                            </ProductAmountContainer>
                        </PriceDetail>
                        <TotalAmountContainer>
                                <TotalAmount>₱{item.amount}</TotalAmount>
                        </TotalAmountContainer>
                    </Product>
                ))}
                </Info>
            </Top>
            <Hr/>

            <SubTotal>
                <SubTotalTitle>SUBTOTAL: </SubTotalTitle>
                <SubTotalAmount id='subtotalAmount'></SubTotalAmount>
            </SubTotal>
            <Bottom>
                <CartButton to='/shop'>CONTINUE SHOPPING</CartButton>
                <CartButton to="/checkout">Check Out</CartButton>
            </Bottom>
            
            </CartWrapper>
        </CartContainer>
        
    )
}

export default CartScreen;