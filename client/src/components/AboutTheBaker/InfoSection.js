import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/Pastries.jpg' 
import img2 from '../../images/TwoTier.jpg' 
const Section = styled.section`
    width: 100vw;
    height: 100%;
    padding: 4rem 0rem;
    background: #F8F1EB;

`;

const Container = styled.div`
    padding: 3rem calc((100vw - 2000px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    margin-left: 8rem;
    margin-right: 10rem;
    margin-bottom: 60px;
    


    @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
}
`;

const ColumnRight = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order:${({reverse}) => (reverse ? '1' : '2')};

    h1{
        margin-bottom: 2rem;
        font-size: clamp(1.5rem, 6vw, 4rem);
        font-weight: bold;
    }
    p{
        margin-bottom: 2rem;
        text-align: justify;
        line-height: 3.3rem;
        font-size: clamp(1rem, 1.5vw, 4rem);
    }
`;
const ColumnLeft = styled.div`
    padding: 1rem 3rem;
    order:${({reverse}) => (reverse ? '2' : '1')} ;
    display: flex;
    justify-content: center;
    align-items: center;

@media screen and (max-width:768px){
    order:${({reverse}) => (reverse ? '1' : '2')};
}

    img{
        width: 100%;
        height: 100%;
        object-fit: scale-down;

        @media screen and (max-width: 780){
            width: 90%;
            height: 90%;
        }
    }
`;



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 7,
            marginLeft:500,
            marginRight:500,
            borderRadius: 10
            
        }}
    />
);

const InfoWrapper = styled.div`

    max-width: 1500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and(max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and(max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`
const InfoCake = styled.img`
    height:90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
  
    padding: 30px;
   
    
`
const InfoText = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        line-height: 1.4;
        padding: 1rem 2rem;
        margin-bottom: 3rem;
        text-align: justify;
        line-height: 3.3rem;
        margin-left: 10rem;
        margin-right: 10rem;
        font-size: clamp(1rem, 1.5vw, 4rem);
      
        
`


const InfoSection = ({heading , reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnRight>
                <h1>{heading}</h1>
                <p>"Celine Angela Dela Cruz is a 23 year old with a passion for baking, cooking and having fun in the kitchen. With a degree in Culinary Arts, she used her qualifications to start up her own business, but it was her love for the craft that made <em>Cakes Over Flowers</em> bloom."</p>
                </ColumnRight>
                <ColumnLeft reverse = {reverse}>
                <img src={image} alt="the baker"/>
                </ColumnLeft>
            </Container>
            <ColoredLine color="#7A4850" />
            {/* <Container2>
                <ColumnRight2 reverse = {reverse}>
                <img src={carrot} alt="the baker"/>
                </ColumnRight2>
                <ColumnLeft2 reverse = {reverse}>
                <img src={carrot} alt="the baker"/>
                </ColumnLeft2>
            </Container2> */}
            
            <InfoWrapper>
                    <InfoCake src={img1} alt="the baker"/>
                    <InfoCake src={img2} alt="the baker"/>
            </InfoWrapper>

            <InfoText>
                <p>Since 2019, <em>Cakes Over Flowers</em> has been putting a smile on the faces of birthday celebrants, 
                couples in love, and many more, all across Metro Manila with their wide range of minimalist cakes and home-baked
                goods. Though they have no physical store, the social media pages of the bakery have made them successful in 
                spreading joy to the city. Hinted at in its name, <em>Cakes Over Flowers</em> is crazy about cakes.  Flowers wither and die, 
                but cakes can bring you to life with a great taste in every bite - so when planning on cheering up your loved ones with a 
                gift, choose <em>Cakes Over Flowers</em> !</p>
            </InfoText>
        </Section>
    )
}

export default InfoSection
