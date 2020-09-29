import React, {Component} from 'react'
import formatCurrency from '../../utils/utils'

export default class Products extends Component {
  render(){
    return(
        <div class="productSectionEcommerce">
            <ul class="productsEcommerce"> 
            
            {this.props.products.map((products)=>{
              return(
                  <div key={products.id}>
                      <div class="productEcommerce">
                      <img src={products.image} alt={products.title}></img>
                      <p class="pad-top">{products.title}</p>  
                      <div class="product-price">{formatCurrency(products.price)}
                      <button onClick={()=> this.props.addToCart(products)} class="btn-product">Add to cart</button>
                      </div>
                      </div>
                  </div>
            );
              })}
                
            </ul>
        </div>
        
    )
 }
}
