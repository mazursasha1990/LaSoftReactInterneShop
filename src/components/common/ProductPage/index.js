

import React from 'react';
import { connect } from 'react-redux';

// import ProductsData from '../../../assets/productsData/products';


import './index.scss';


const ProductPage = ({ match, products }) => {
    console.log(products);

    const {
        params: { id }
    } = match;

    console.log("id", id);

    const getProduct = products.find(item => item.id == id);
    console.log(getProduct);

    return (

        <div>
            <div>
                Test
            </div>
            <p>
                <strong>Product ID: {id}</strong>
            </p>
            <img src={getProduct.url} alt={id} />
            <p>
                <strong>Product price: {getProduct.price} $</strong>
            </p>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.LOAD_CURRENT_ITEM.products,
    };
};


export default connect(mapStateToProps)(ProductPage);