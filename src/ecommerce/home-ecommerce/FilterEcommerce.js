import React, {Component} from 'react'
import { connect } from 'react-redux'
import { filterProducts, sortProducts } from '../actions/productActions'

class FilterEcommerce extends Component{
    render(){
        return !this.props.filterProducts?(
            <div>Loading..</div>
            ):(
            <div class="filterEcommerce">
                <div class="filterEcommerce-result">Products: {this.props.filterProducts.length}{ console.log(this.props.count)}</div>
                <div class="filterEcommerce-sort">
                     Order {" "}
                     <select class="filterEcommerce-select" value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div class="filterEcommerce-size">
                    Size {" "}
                    <select class="filterEcommerce-select" value={this.props.size} onChange={(e)=>this.props.filterProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
         </div>
            )
    }
}
export default connect((state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    count: state.products.length
}), 
{
    filterProducts,
    sortProducts,
}
)(FilterEcommerce)