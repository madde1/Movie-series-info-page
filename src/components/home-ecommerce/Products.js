import React, {Component} from 'react'
import formatCurrency from '../../utils/utils'
import Fade from 'react-reveal/Fade'
import ReactModal from 'react-modal'
import Zoom from 'react-reveal/Zoom'


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
        };
      
      }
      openModal = (products) => {
        this.setState({ products });
      };
      closeModal = () => {
        this.setState({ products: null });
      };

  render(){
    const { products } = this.state;
    return(
        <section>
        <Fade bottom cascade>
        <div class="productSectionEcommerce">
            <ul class="productsEcommerce"> 
            {this.props.products.map((products)=>(
                  <div key={products.id}>
                      <div class="productEcommerce">
                        <a href="javascript:;" onClick={() => this.openModal(products)} >   
                            <img src={products.image} alt={products.title} ></img>
                        
                        <p class="pad-top">{products.title}</p>  
                        </a>
                        <div class="product-price">{formatCurrency(products.price)}
                            <button onClick={()=> this.props.addToCart(products)} class="btn-product">Add to cart</button>
                      </div>
                      </div>
                  </div>
                ))}
            </ul>
        </div>
        </Fade>
        { products && (
            <ReactModal  
            isOpen={true}
            contentLabel="onRequestClose Example"
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={false}>
                <Zoom>
                <button id="close-modal" class="close-modal" onClick={this.closeModal}>X</button>
                    <div id="productEcommerceModalDetails">
                    
                    <img id="productEcommerceModalImg" src={products.image} alt={products.title} ></img>
                    <div id="productEcommerceModalDetailsDescription" >
                        <h4>{products.title}</h4>
                        <p>{products.description}</p>
                        <p>
                            Available sizes: {" "}
                            {products.availableSizes.map((x) => (
                                <span>
                                    {" "}
                            <button class="productEcommerceModalSizeBtn">{x}</button>
                                </span>
                            ))}
                        </p>
                        <div class="productModalPriceEcommerce">
                            <div class="product-price">{formatCurrency(products.price)}</div>
                            <button class="btn-product" onClick={() => {
                                this.props.addToCart(products);
                                this.closeModal();
                            }}>Add to cart</button>
                        </div>
                    </div>
                    </div>
                </Zoom>
            </ReactModal>

        )}
             
         
        </section>
    )
 }
}
