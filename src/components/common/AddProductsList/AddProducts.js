import React from 'react';
import { connect } from 'react-redux';
import { addProductsList } from '../../../redux/actions';

const AddProducts = ({ products }) => {
    console.log(products);
    return (
        <div>

            <button
                onClick={() => addProductsList()}
                type="submit">
                Add Products
            </button>

        </div >

    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.addProductsList,
    };

};

export default connect(mapStateToProps)(AddProducts)