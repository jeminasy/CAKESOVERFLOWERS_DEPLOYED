import React, {useEffect, useState, useRef}from 'react'
import styled from 'styled-components/macro'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';


const Section = styled.section`
    height: 100vh;
    max-height: 500px;
    position: relative;
    overflow: hidden;
    
`;
// const Heading = styled.h5`
//     font-size: clamp(5rem, 2.5vw, 3rem);
//     text-align: center;
//     justify-content: center;
//     margin-top: 7rem;
    
//     color: #000;
//     padding:0%;
//     font-family: 'Cormorant Garamond', serif;
//     color: #7A4850;
//     font-style: italic;
//     font-weight: 100;
    
    
// `;
const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    border-bottom: 4px solid #7a4850;      
    

`;
const Slide = styled.div`
    z-index:1;
    width: 100%;
    height: 100%;
`;
const Slider = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
   
   top: 0;
   left: 0;
   width: 2000px;
  height: 600px;
   object-fit: cover;
`;
    /* &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 100%);
    } */

    
const Content = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 15rem;
    /* max-width: 1600px; */
    width: calc(100% - 100px);
    color: #000;
    /* margin-top: -10rem; */

h1{
    font-size: clamp(1rem, 7vh, 12rem);
    
    margin-right:  12rem;
    margin-bottom:2rem;
    margin-top: 7.5rem;
    font-weight: 700;
    color: #59371C;
    
}
h2{
    margin-bottom: 1.2 rem;
    margin-top: 1rem;
    font-size: 2rem;
    color: #59371C;
    font-size:clamp(1rem, 3vw, 2rem);
}
`;


const PrevArrow = styled(IoArrowBack)`
    position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  width: 50px;
  height: 50px;
  background: #cd853f;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  transition: 0.3s;
  opacity: 50%;

  &:hover {
  background: #cd853f;
  transform: scale(1.05);
  opacity: 100%;
  }
`
const NextArrow = styled(IoArrowForward)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  width: 50px;
  height: 50px;
  background: #cd853f;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  transition: 0.3s;
  opacity: 50%;
&:hover {
  background: #cd853f;
  transform: scale(1.05);
  opacity: 100%;
}
`


const Welcome = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length
const timeout = useRef(null) //automated slider

useEffect(() => {
    const nextSlide = () => {
        setCurrent(current => (current === length -1?0 : current +1))
    }

    timeout.current = setTimeout(nextSlide, 2000)

    return function () {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
}, [current, length])



const nextSlide = () =>{
    if(timeout.current){
        clearTimeout(timeout.current) //need here bcs it's working at the same time
    }
    
    setCurrent(current === length - 1 ? 0 : current + 1)

    
    // console.log(current)
}
const prevSlide = () =>{
     if(timeout.current){
        clearTimeout(timeout.current)
    }
    
    setCurrent(current === 0  ? length-1 : current - 1)

   
    // console.log(current)
}

//if there is no data it should still work
if(!Array.isArray(slides) || slides.length <= 0){
    return null
}
    return (
        <Section>
            {/* <Heading></Heading> */}
        <Wrapper>
        <PrevArrow onClick={prevSlide}/>
        <NextArrow onClick = {nextSlide} />
            {slides.map((slide, index) => {
                return(
                    <Slide key={index}>
                        {index === current && (

                        
                        <Slider>
                            <Image src={slide.image} alt={slide.alt}/>
                            <Content>
                                
                                <h1>{slide.title}</h1>
                                <h2>{slide.price}</h2>
                                
                            </Content>
                        </Slider>
                        )}
                    </Slide>
                )
            })}
            
                
            
        </Wrapper>
        </Section>
    )
}

export default Welcome
