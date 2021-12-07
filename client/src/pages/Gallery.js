import React from 'react'
import styled from 'styled-components'
import image2 from '../images/GALLERY.jpg'
import ImageDisplay from '../components/Gallery/DisplayImages'
import { GalleryData } from '../data/GalleryData'


function Gallery () {
    return (
        <>
            
         
            <Banner2/>
            <ImageDisplay data={GalleryData}/>
        </>
      )
}

export default Gallery;




const BannerContainer2 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${image2});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    padding: 0 1rem;
    border-bottom: 4px solid #7a4850;
    border-top: 4px solid #7a4850;

   
    
    h2{
    margin-top: 3rem;
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 500;
    font-family: 'Abril Fatface';
 
    color: #59371C;
}

p{
    margin-top: 3rem; 
      font-size:clamp(1rem, 3vw, 2rem);
      font-weight: 100;
    color: #59371C;
    
  }
`


const Banner2 = () => {
    return (
        <BannerContainer2>
            
            <h2>Gallery</h2>
            <p>Take peek at the cakes featured on our Instagram page @cakeoverflowers</p>
            
            
        </BannerContainer2>
    )
}