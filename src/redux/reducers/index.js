import { combineReducers } from 'redux';
import todos from './todos';
import addProductsList from './addProductsList'
import LOAD_CURRENT_ITEM from './loadCurrentItem';

export default combineReducers({
    todos,
    addProductsList,
    LOAD_CURRENT_ITEM,
})