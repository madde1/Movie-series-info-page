import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/ProductReducer'

const initialState = {}
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const storeEcommerce = createStore(combineReducers({
    products: productsReducer,
}),
    initialState,
    composeEnchancer(applyMiddleware(thunk))
)
export default storeEcommerce