import React from 'react'
import Related from '../components/Shop/Related';
import Cake from '../components/ProductDetails/Cake';
import { RelatedProductsData } from '../data/RelatedProducts';


function ViewCake () {
    return (
        <>
            <Cake />
            <Related heading = 'Related Products' data ={RelatedProductsData}/>
           
            
        </>
      )
}

export default ViewCake;