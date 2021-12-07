import { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import "./Login.css";
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
    height:100%auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            history.push("/me");
        }
    }, [history]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                '/auth/login',
                {email, password},
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
                <form onSubmit={loginHandler} className="login-screen__form">
                    <h3 className="login-screen__title">Login</h3>
                    {error && <span className="error-message">{error}</span>}

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            required 
                            id="email" 
                            placeholder="Email address" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            tabIndex={1}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: {" "}
                        </label>
                        <input
                            type="password" 
                            required 
                            id="password" 
                            autoComplete="true"
                            placeholder="Enter password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            tabIndex={2}
                        />
                        <Link to="/forgotpassword" className="login-screen__forgotpassword">
                            Forgot Password
                        </Link>
                    </div>

                    <button type="submit" className="btn-form__primary">
                        Login
                    </button>

                    <span className="login-screen__subtext">
                        Don't have an account? <Link to="/register">Register</Link>
                    </span>
                </form>
                </FormContent>
        </FormWrap>
    </Container>
    </>
    );
}

export default LoginScreen;