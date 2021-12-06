import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
// import { selectedProductsReducer } from './selectedProductReducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    // product: selectedProductsReducer,
})

export default reducers;