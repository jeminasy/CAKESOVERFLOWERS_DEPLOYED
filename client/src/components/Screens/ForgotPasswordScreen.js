import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

import "./ForgotPassword.css";
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

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Cotent-Type": "application/json",
            },
        };

        try {
            const { data } = await axios.post(
                "/auth/forgotpassword",
                { email },
                config
            );

            setSuccess(data.data);
        } catch (error) {
            setError(error.response.data.error);
            setEmail("");
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
                <form
                    onSubmit={forgotPasswordHandler}
                    className="forgotpassword-screen__form"
                >
                    <h3 className="forgotpassword-screen__title">Recover Password</h3>
                    {error && <span className="error-message">{error}</span>}
                    {success && <span className="success-message">{success}</span>}
                    
                    <div className="form-group">
                        <p className="forgotpassword-screen__subtext">
                            Please provide your account's email address
                        </p>
                        <input
                            type="email"
                            required
                            id="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-form__primary">
                        Send Email
                    </button>
                </form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
    );
};

export default ForgotPasswordScreen;