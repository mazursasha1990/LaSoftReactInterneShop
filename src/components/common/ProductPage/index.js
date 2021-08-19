import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import ProductsData from '../../../assets/productsData/products';


import './index.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../../redux/actions';
import { useEffect } from 'react';

const ProductPage = ({ match, products }) => {
    // const product = useSelector((state) => state.allProducts);
    // const productId = useParams();
    // // const dispatch = useDispatch();
    // console.log(productId);
    // console.log(productId.id);
    // console.log("product", product);

    // const products = useSelector((state) => state.allProducts.products);
    // console.log(state);
    // console.log(products);

    // console.log("Products", products);


    console.log(products);

    const {
        params: { id }
    } = match;

    console.log("id", id);

    const getProduct = products.find(item => item.id == id);
    console.log(getProduct);

    return (

        <div>
            {/* <div>Product Page {getProduct.id}</div> */}
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
        products: state.allProducts.products,
    };
};


export default connect(mapStateToProps)(ProductPage);

// export default ProductPage;