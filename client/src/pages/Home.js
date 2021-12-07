import React from 'react'
import Welcome from '../components/Welcome';
import { SliderData } from '../data/SliderData';
import { bestsellerData } from '../data/BestsellerData';
import Bestseller from '../components/Bestseller';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import { TestiData } from '../data/TestiData';
import Banner2 from '../components/Banner2';

function Home () {
    return (
        <>
       
      
            <Welcome slides={SliderData} />
            <Bestseller heading='Bestsellers' data={bestsellerData} />
            < Banner />
            <Testimonials slides={TestiData} />
           <Banner2/>
        </>
      )
}

export default Home;
