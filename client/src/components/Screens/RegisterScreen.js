import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import "./Register.css";
import "./index.css";

const Container = styled.div`
    min-height: 100vh;
    position: relative;
    
    z-index: 0;
    overflow: hidden;
    padding: 5rem calc((100vw - 1500px)/2);
    background: #F8F1EB;
    color: #000;
`

const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:400px){
        height: 80%;
    }
`

const Icon = styled.div`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480){
        margin-left: 16px ;
        margin-top: 8px;
    }
`
const FormContent = styled.div`
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const RegisterScreen = ({ history }) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ error, setError ] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Password do not match");
        }

        try {
            const { data } = await axios.post(
                '/auth/register',
                {
                    firstName,
                    lastName,
                    email,
                    password
                },
                config
            );

            localStorage.setItem("authToken", data.token);

            history.push("/");
        } catch(error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };
    
    return (
    <>
    <Container>
        <FormWrap>
            <Icon></Icon>
            <FormContent>
            <form onSubmit={registerHandler} className="register-screen__form">
                <h3 className="register-screen__title">Register</h3>
                {error && <span className="error-message">{error}</span>}
                
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text"
                        required
                        id="firstname"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                    <input 
                        type="text"
                        required
                        id="lastname"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input type="email"
                        required
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input type="password"
                        required
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password"
                        required
                        id="confirmpassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-form__primary">
                    Register
                </button>

                <span className="register-screen__subtext">
                    Already have an account? <Link to="/login">LogIn</Link>
                </span>

            </form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
    );
}

export default RegisterScreen;