import React, {Component} from 'react'
import formatCurrency from '../../utils/utils'
export default class CartEcommerce extends Component{
    render(){
       
        return(
            <div>
                {this.props.cartItems.length === 0? <div class="cartEcommerce cartEcommerceHeader"> Cart is empty</div>
                :
                <div class="cartEcommerce cartEcommerceHeader">You have {this.props.cartItems.length} in the cart {" "}</div>    
            }
            <div>
            <div class="cartEcommerce">
                <div class="cartEcommerceItems">
                    {this.props.cartItems.map((items) =>(
                        <li key={items.id}>
                            <div>
                                <img src={items.image} alt={items.title}></img>
                            </div>
                            <div>
                                <div>{items.title}</div>
                                <div class="right">
                                {formatCurrency(items.price)} x {items.count} 
                                <button onClick={()=>this.props.removeFromCart(items)}>Remove</button>
                                </div>
                               
                            </div>
                        </li>
                    ))}
                </div>
                {this.props.cartItems.length !== 0 && ( //hide if no item added to cart
                    <div class="cartEcommerce">
                        <div class="cartEcommerceTotal">
                            <div>
                                Total: {" "}
                                {formatCurrency(this.props.cartItems.reduce((a,c) =>  a + c.price * c.count, 0))}
                            </div>
                            <button class="cartEcommerceTotalBtn">Procced</button>
                        </div>
                </div>
                )}
            </div>
            </div>
            </div>
            
        )
    }
}