import ProductsData from '../../../src/assets/productsData/products'

const addProductsList = (state = [], action) => {
    switch (action.type) {

        case 'ADD_PRODUCTS_LIST':
            return (
                ProductsData
            )
        default:
            return state;
    }
}

export default addProductsList;