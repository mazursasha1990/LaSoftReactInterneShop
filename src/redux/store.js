import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../../src/assets/productsData/products'

export default configureStore({
    reducer: {
        posts: postsReducer,
    },
})