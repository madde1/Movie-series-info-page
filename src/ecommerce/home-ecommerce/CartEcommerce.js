import React, {Component} from 'react'
import formatCurrency from '../../utils/utils'
import Fade from 'react-reveal/Fade'

export default class CartEcommerce extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            address: "",
            city: "",
            showCheckout: false
        }
    }

    handelInput= (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createOrder = (e) =>{
        e.preventDefault()
        const order ={
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            city:this.state.city,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order)
    }
    render(){
       
        return(
        <section>
                {this.props.cartItems.length === 0? <div class="cartEcommerce cartEcommerceHeader"> Cart is empty</div>
                :
                <div class="cartEcommerce cartEcommerceHeader">You have {this.props.cartItems.length} in the cart {" "}</div>    
            }
         <section>       
            <div class="cartEcommerce" >
            <Fade left cascade>
                <ul class="cartEcommerceItems">
                   
                    {this.props.cartItems.map((items) =>(
                        <li class="cartLiEcommerce" key={items.id}>
                            <div class="cartLiContainerEcommerce">
                                <img class="cartEcommerceImg" src={items.image} alt={items.title}></img>
                            </div>
                            <div>
                                <div>{items.title}</div>
                                <div class="right">
                                {formatCurrency(items.price)} x {items.count} 
                                <button class="cartBtnRemoveEcommerce" onClick={()=>this.props.removeFromCart(items)}>Remove</button>
                                </div>
                               
                            </div>
                        </li>
                    ))}
                </ul>
                </Fade>
            </div>
             
                {this.props.cartItems.length !== 0 && ( //hide if no item added to cart
                <div>
                    <div>
                        <div class="cartEcommerceTotal">
                            <div>
                                Total: {" "}
                                {formatCurrency(this.props.cartItems.reduce((a,c) =>  a + c.price * c.count, 0))}
                            </div>
                            <button onClick={() => {this.setState({showCheckout: true})}} class="cartEcommerceTotalBtn">Procced</button>
                        </div>
                </div>
                {this.state.showCheckout &&(
                    <Fade right cascade>
                    <div > 
                    <form class="carFormEcommerce" onSubmit={this.createOrder}>
                        <ul class="cartFormContainerEcommerce">
                            <li>
                                <label>Name</label>
                                <input type="text" name="name" required onChange={this.handelInput}></input>
                            </li>
                            <li>
                                <label>Email</label>
                                <input type="email" name="email" required onChange={this.handelInput}></input>
                            </li>
                            <li>
                                <label>Address</label>
                                <input type="text" name="address" required onChange={this.handelInput}></input>
                            </li>
                            <li>
                                <label>City</label>
                                <input type="text" name="city" required onChange={this.handelInput}></input>
                            </li>
                            <li>
                                <button class="carFormEcommerceBtn" type="submit">Checkout</button>
                            </li>
                        </ul>
                    </form>
                    </div>
                    </Fade>
                )}
                </div>
                )}

          
           
            </section>
            </section>
            
        )
    }
}