import React, {Component} from 'react'
import Products from '../home-ecommerce/Products';
import FilterEcommerce from './FilterEcommerce';
import {products} from '../../data/dataecommerce'
import CartEcommerce from './CartEcommerce';
class Landingecommerce extends Component {
    constructor(){
        super();
        this.state ={
            products: products,
            size:"",
            sort:"",
            cartItems: [],
        };
    }

    removeFromCart = (products) =>{
        const cartItems = this.state.cartItems.slice()
        this.setState({cartItems:cartItems.filter(x=>x.id !== products.id)})
        
    }

    addToCart = (products)=>{
        const cartItems = this.state.cartItems.slice()
        let alreadyInCart = false
       
        cartItems.forEach((items)=>{
            if(items.id === products.id ){
                items.count++
                alreadyInCart = true
            }
        });
        if(!alreadyInCart){
            cartItems.push({...products, count:1})

        }
        this.setState({cartItems})
    }

    sortProducts = (event) =>{
       const sort = event.target.value
        console.log(event.target.value)
        this.setState(state=>({
            sort:sort,
            products: this.state.products.slice().sort((a,b)=>(
                sort === "lowest"?
                ((a.price > b.price)? 1:-1):
                sort === "highest"?
                ((a.price < b.price)? 1:-1):
                ((a.id > b.id)? 1:-1)
            ))
        }))
    }

    filterProducts = (event)=>{
        if(event.target.value === ""){
            this.setState({
                size: event.target.value,  products:products
            })
        }else{
        console.log(event.target.value)
        this.setState({
            size:event.target.value,
            products: products.filter((products) => products.availableSizes.indexOf(event.target.value)>=0)
          
        })
    }
    }
    render(){
        return(
            <section class="ecommerceHome margin-s">
                <header class="header-ecommerce"><a class="head-ecommerce">React Shopping Cart</a></header>
                <main>
                    <div class="contentEcommerce pad-s">
                        <div class="mainEcommerce">
                            <FilterEcommerce 
                            count= {this.state.products.length}
                            size={this.state.size} 
                            sort={this.state.sort} 
                            filterProducts ={this.filterProducts} 
                            sortProducts={this.sortProducts}/>
                            <Products 
                            products={this.state.products} 
                            addToCart={this.addToCart}/>
                        </div>
                        <div class="sidebarEcommerce">
                            <CartEcommerce
                             cartItems ={this.state.cartItems}
                             removeFromCart={this.removeFromCart}/>
                        </div>
                    </div>
                </main>
            </section>
           
        )
    }
}
export default Landingecommerce