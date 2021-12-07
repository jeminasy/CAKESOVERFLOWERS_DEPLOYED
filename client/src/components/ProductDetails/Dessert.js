import React, { useState, useEffect } from 'react';
import { Add, Remove } from '@material-ui/icons'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
// import { Button2 } from '../../components/Button'
// import TresLeches from '../../images/BanoffeePie.jpg'
import Related from './Related';
import { RelatedProductsData } from '../../data/RelatedProducts';

import "../index.css"

const Container = styled.div`
width: 100vw;
min-height: 80vh;
padding: 5rem calc((100vw - 1500px)/2);
background: #F8F1EB;
color: #000;
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    @media only screen and (max-width: 780px){
     flex-direction: column;
     padding: 20px;
    }
    
`
const ImgContainer = styled.div`
    flex:1;
    
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: 780px){
     width: 70%;
    }
    
    
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    @media only screen and (max-width: 780px){
     margin-top: 15px;
     padding: 5px;
    }
    
`
const Title = styled.h1`
    margin-top: 1rem;

`
const Desc = styled.p`
    padding-right: 6rem;
    margin: 20px 0px;
    text-align: justify;
    line-height: 3rem;
`
const Price = styled.span`
   
    font-size: 40px;
`

const AddContainer = styled.div`
    width: 50% auto;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    /* justify-content: space-between; */
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #B2784A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Dessert = ({ history }) => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get(
                `/product/pastry/${id}`
            )
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }

    var amount = parseInt(1);
    // var cakeid = data._id;

    function addOne(){
        amount++;
        document.getElementById('quantity').innerHTML = amount;
    }
    function removeOne(){
        if (amount > 1){
            amount--;
            document.getElementById('quantity').innerHTML = amount;
        }
    }

    const addToCartHandler = async(e) => {
        e.preventDefault();
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            const { data } = await axios.put(
                '/cart/add-dessert',
                {
                    quantity: amount,
                    dessertId: id
                },
                config
            );

            history.push("/cart");
        } catch(error) {
            history.push("/login")
            console.log(error);
        }
    }

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                <Image src={data.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{data.name}</Title>
                    <Desc>{data.description}</Desc>
                    <Price>₱{data.price}</Price>
                    
                    <AddContainer>
                    <AmountContainer>
                        <button className="btn-add__remove"><Remove onClick={()=> removeOne()} /></button>
                        <Amount id='quantity'>1</Amount>
                        <button className="btn-add__remove"><Add onClick={()=> addOne()} /></button>
                        
                    </AmountContainer>
                    <button onClick={addToCartHandler} className="btn-form__primary">ADD TO CART</button>
                    </AddContainer>
                </InfoContainer>
                
            </Wrapper>
            <Related heading='Related Products' data={RelatedProductsData}/>
        </Container>

    )
}

export default Dessert;