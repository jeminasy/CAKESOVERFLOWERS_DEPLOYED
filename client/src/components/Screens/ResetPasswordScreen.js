import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

import "./ResetPassword.css";
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

const ResetPasswordScreen = ({ history, match }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetPasswordHandler = async (e) => {
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
            return setError("Passwords don't match");
        }

        try {
            const { data } = await axios.put(
                `/auth/resetpassword/${match.params.resetToken}`,
                {
                    password,
                },
                config
            );

            console.log(data);
            setSuccess(data.data);
        } catch (error) {
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
                <form
                    onSubmit={resetPasswordHandler}
                    className="resetpassword-screen__form"
                >
                    <h3 className="resetpassword-screen__title">Reset your password</h3>
                    {error && <span className="error-message">{error}</span>}
                    {success && (
                        <span className="success-message">
                            {success} 
                        </span>
                    )}

                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input 
                            type="password"
                            required
                            id="password"
                            placeholder="Enter new password"
                            autoComplete="true"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input 
                            type="password"
                            required
                            id="confirmpassword"
                            placeholder="Confirm your new password"
                            autoComplete="true"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-form__primary">
                        Reset Password
                    </button><br />
                    {success && (
                        <Link to="/login"><button className="btn btn-secondary">Click here to login</button></Link>
                    )}
                </form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
    );
};

export default ResetPasswordScreen;