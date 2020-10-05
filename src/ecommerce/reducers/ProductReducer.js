const { FETCH_PRODUCTS, FILTER_PROUCTS_BY_SIZE, ORDER_PRODUCTS_PRICE } = require("../types");

export const productsReducer = (state = {}, action) =>{
    
    switch(action.type){
        case FILTER_PROUCTS_BY_SIZE:
            return{
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            }
        case ORDER_PRODUCTS_PRICE:
            return{
                sort:action.payload.sort,
                filteredItems:action.payload.items,
        }    
        case FETCH_PRODUCTS:
            return{items: action.payload, filteredItems: action.payload}
        default: 
        return state    
    }
}