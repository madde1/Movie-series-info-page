import React, {Component} from 'react'
import {Products} from '../home-ecommerce/Products';
class Landingecommerce extends Component {

    
    render(){
        return(
            <section class="ecommerceHome margin-s">
                <header class="header-ecommerce"><a class="head-ecommerce">React Shopping Cart</a></header>
                <main>
                    <div class="contentEcommerce pad-s">
                        <div class="mainEcommerce">
                            <Products/>
                        </div>
                        <div class="sidebarEcommerce">cart item</div>
                    </div>

                </main>
         
                
                </section>
           
        )
    }
}
export default Landingecommerce