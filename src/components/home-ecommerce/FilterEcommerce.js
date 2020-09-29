import React, {Component} from 'react'

export default class FilterEcommerce extends Component{
    render(){
        return(
            <div class="filterEcommerce">
                <div class="filterEcommerce-result">Products: {this.props.count}</div>
                <div class="filterEcommerce-sort">
                     Order {" "}
                     <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div class="filterEcommerce-size">
                    <select value={this.props.size} onChange={this.props.filterProducts}>
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