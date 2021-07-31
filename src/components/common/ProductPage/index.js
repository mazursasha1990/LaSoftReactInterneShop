

import React from 'react';

import ProductsData from '../../../assets/productsData/products';

import './index.scss';


const ProductPage = ({ match }) => {
    const {
        params: { id }
    } = match;


    return (
        <div>
            <p>
                <strong>Product ID: {id}</strong>
            </p>
            <img src={ProductsData[id - 1].url} alt={id} />
            <p>
                <strong>Product price: {ProductsData[id - 1].price} $</strong>
            </p>
        </div>
    )
}


export default ProductPage;