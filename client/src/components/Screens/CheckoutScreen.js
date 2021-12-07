import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { Col, Row} from "react-bootstrap";
import grab from "../../images/grab.png";
import lalamove from "../../images/lalamove.png";
// import Table from 'react-bootstrap/Table';
import "../index.css";
import "./index.css";

const Section = styled.section`
    width: 100vw;
    min-height: 100%;
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
`;
const Container = styled.div`
    padding: 3rem calc((100vw - 1000px)/2);
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    .button {
        font-size: 1rem;
        padding:  0.5rem 2rem;
        border: none;
        background: #B2784A;
        color: #fff;
        transition: 0.2 ease-out;
        border-radius: 1px;
    }

    .button2 {
        font-size: 1rem;
        border: none;
        color: black;
        transition: 0.2 ease-out;
        text-decoration: none;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;

    }
`;

const CheckoutScreen = ({history}) => {
    const [ dedication ,setDedication ] = useState("");
    const [ designDesc, setDesignDesc ] = useState("");
    const [ designSample, setDesignSample ] = useState("");
    const [ remarks, setRemarks ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ deliverMethod, setDeliverMethod ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ barangay, setBarangay ] = useState("");
    const [ city, setCity ] = useState("");
    const [ region, setRegion ] = useState("");
    const [ zipCode, setZipCode ] = useState("");
    const [ downpayment, setDownpayment ] = useState("");

    const [ error, setError ] = useState("");

    const checkoutHandler = async (e) => {
        e.preventDefault();
        const config = { 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        try {
            const { data } = await axios.post(
                '/order',
                {
                    dedication,
                    designDesc,
                    designSample,
                    remarks,
                    phoneNumber,
                    deliverMethod,
                    street,
                    barangay,
                    city,
                    region,
                    zipCode,
                    downpayment
                },
                config
            );
            history.push("/success");
        } catch(error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    
    return error? (
        <div>
            <span className="error-message">Something went wrong. Please try again</span>
            <button className="btn btn-please__login">
                <Link to="/shop">Go Back to Shop</Link>
            </button>
        </div>
    ) : (
        <>
        <Section className="responsive">
            <Container>
                <Form onSubmit={checkoutHandler} className="checkout-form">

                <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    required
                    type="tel" 
                    placeholder="Enter your Phone Number" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                </Form.Group>
                    <br/>
                    <br/>

                <Form.Group>
                    <Form.Label>Dedication on Cake</Form.Label><span className="span-optional__field">(Optional)</span>
                    <Form.Control 
                        as="textarea" 
                        rows={2} 
                        placeholder="Enter up to a maximum of 20 characters..." 
                        maxLength="60"
                        value={dedication}
                        onChange={(e) => setDedication(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <br/>
                <Form.Group>
                    <Form.Label>Cake Design Description</Form.Label><span className="span-optional__field">(Optional)</span>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Provide a brief description of how you want your selected design to look..."
                        maxLength="300"
                        value={designDesc}
                        onChange={(e) => setDesignDesc(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <br/>
                
                <Form.Group>
                    <Form.Label>Cake Design Sample</Form.Label><span className="span-optional__field">(Optional)</span>
                    <Form.Text className="text-muted">
                    &nbsp;  (Feel free to upload images that you want your cake to be inspired by.)
                    </Form.Text>
                    <Form.Control 
                        type="file" 
                        multiple 
                        value={designSample}
                        onChange={(e) => setDesignSample(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <br/>
                <Form.Group>
                    <Form.Label>Additional Remarks</Form.Label><span className="span-optional__field">(Optional)</span>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        maxLength="300"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <br/>
                <h4 className="header">Delivery Method</h4>
                <hr/>
                <fieldset>
                    <Form.Group>
                        <Form.Check
                            required
                            type="radio"
                            label={<img src = {grab} style={{height:'5rem',width:'auto'}} alt="grab logo"/>}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="Grab"
                            onChange={(e) => setDeliverMethod(e.target.value)}
                        /> 
                        <br/>
                        <Form.Check
                            required
                            type="radio"
                            label={<img src = {lalamove} style={{height:'5rem',width:'auto'}}  alt="lalamove logo"/>}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="Lalamove"
                            onChange={(e) => setDeliverMethod(e.target.value)}
                        />
                    </Form.Group>
                </fieldset>
                <br/>
                    <br/>
                    <h4 className="header">Shipping Address</h4>
                <hr/>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Street</Form.Label>
                    <Form.Control 
                        required
                        placeholder="Apartment, studio, or floor, 1234 Main St" 
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Barangay</Form.Label>
                    <Form.Control 
                        required
                        placeholder="" 
                        value={barangay}
                        onChange={(e) => setBarangay(e.target.value)}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        required
                        placeholder="" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Region</Form.Label>
                    <Form.Control 
                        required
                        placeholder="" 
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control 
                        required
                        placeholder="" 
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    </Form.Group>
                </Row>

                <br/>
                <br/>

                <div>
                    <h4>Payment Method</h4>
                    <span>Downpayment is needed to accept your orders.</span>
                        <hr/>
                        <br/>
                    <center>
                    <Row>
                    &nbsp; 
                        <Col md={4}>GCash</Col>
                    </Row>
                    </center>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>09178570190</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>Celine Angela Dela Cruz</Col>
                    </Row>
                    <br/>
                    <center>
                    <Row>
                        <Col md={4}>BDO</Col>
                    </Row>
                    </center>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>8888 8888 8888 8888</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }}>Celine Angela Dela Cruz</Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h4>Proof of Downpayment</h4>
                    <span>Please upload a photo or screenshot of your proof of downpayment.</span>
                        <hr/>
                        <br/>
                        <Form>
                        <Form.Control 
                            required
                            type="file" 
                            multiple 
                            placeholder="" 
                            value={downpayment}
                            onChange={(e) => setDownpayment(e.target.value)}
                        />
                        </Form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {error && <span className="error-message">{error}</span>}
                    <Button type="submit" className="button" variant="primary">Place Order</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button href='/cart' className="button2" variant="link">Return to Cart</Button>
                </div>

                </Form>
            </Container>
        </Section>
        </>
    );
};

export default CheckoutScreen;