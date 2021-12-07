import "./index.css";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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

const ErrorScreen = () => {
    return (
        <>
        <Container>
            <div>
                <center>
                    <h3>Something went wrong. Please try again.</h3>
                    <button className="btn btn-please__login">
                        <Link to="/shop">Return to Shop</Link>
                    </button>
                </center>
            </div>
        </Container>
        </>
    )
}

export default ErrorScreen;