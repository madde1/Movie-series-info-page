import React, {Component} from 'react'
import {products} from '../../data/dataecommerce'
import formatCurrency from '../../utils/utils'

export const Products =() =>{
   return(
        <div class="productSectionEcommerce">
            <ul class="productsEcommerce"> 
            
            {products.map((product, key)=>{
              return(
                  <div key={products.id}>
                      <div class="productEcommerce">
                      <img src={product.image} alt={product.title}></img>
                      <p class="pad-top">{product.title}</p>  
                      <div class="product-price">{formatCurrency(product.price)}
                      <button class="btn-product">Add to cart</button>
                      </div>
                      </div>
                  </div>
            );
              })}
                
            </ul>
        </div>
        
    )

}
