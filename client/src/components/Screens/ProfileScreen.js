import { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import "./index.css";

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

const ProfileScreen = ({history}) => {
    const [ error, setError ] = useState("");
    const [ userData, setUserData ] = useState([]);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
        };

        axios
            .get('/me', config)
            .then((res) => {
                console.log(res);
                setUserData(res.data);
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("authToken");
                setError("You are not authorized, please login");
                history.push("/login");
            });
    }

    const logoutHandler = async (e) => {
        e.preventDefault();

        localStorage.removeItem("authToken");
        history.push("/login");
    }

    return error? (
        <span className="error-message">{error}</span>
    ) : (
        <>
        <Container>
            <div>
                <center>
                    <h3>Logged in as {userData.firstName} {userData.lastName}</h3>
                    <p>{userData.email}</p>
                </center>
            </div>
            <center>
                <button onClick={logoutHandler} className="btn-user__logout">
                    Log Out
                </button>
            </center>
        </Container>
        </>
    );
}
 export default ProfileScreen;