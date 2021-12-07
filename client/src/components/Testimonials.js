import React, {useEffect, useState, useRef}from 'react'
import styled from 'styled-components/macro'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import letter from '../images/testi.JPG'

const TestiSection = styled.section`
    height: 100vh;
    max-height: 700px;
    position: relative;
    overflow: hidden;
    background: url(${letter});
`;
const TestiHeading = styled.h5`
    font-size: clamp(5rem, 2.5vw, 3rem);
    text-align: center;
    justify-content: center;
    margin-top: 7rem;
    
    color: #000;
    padding:0%;
    font-family: 'Cormorant Garamond', serif;
    color: #7A4850;
    font-style: italic;
    font-weight: 100;
    
    
`;
const TestiWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;      
    

`;
const TestiSlide = styled.div`
    z-index:1;
    width: 100%;
    height: 100%;
`;
const TestiSlider = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

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
`;
    
const TestiContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #000;
    margin-top: -10rem;

h5{
    font-size: clamp(1rem, 8vh, 2rem);
    margin-left: 12rem;
    margin-right:  12rem;
    margin-bottom:2rem;
    margin-top: 7.5rem;
    font-weight: 100;
    font-style: italic;
}
h4{
    margin-bottom: 1.2 rem;
    margin-top: 3rem;
    font-size: 2rem;
    color: #FF8D8D;
}
`;


const PrevArrow = styled(IoArrowBack)`
    position: absolute;
  top: 30%;
  left: 10%;
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
  top: 30%;
  right: 10%;
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


const Testimonials = ({slides}) => {
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
        <TestiSection>
            <TestiHeading>Testimonials</TestiHeading>
        <TestiWrapper>
        <PrevArrow onClick={prevSlide}/>
        <NextArrow onClick = {nextSlide} />
            {slides.map((slide, index) => {
                return(
                    <TestiSlide key={index}>
                        {index === current && (

                        
                        <TestiSlider>
                            <TestiContent>
                                <h5>{slide.message}</h5>
                                <h4>{slide.from}</h4>
                                
                            </TestiContent>
                        </TestiSlider>
                        )}
                    </TestiSlide>
                )
            })}
            
                
            
        </TestiWrapper>
        </TestiSection>
    )
}

export default Testimonials
