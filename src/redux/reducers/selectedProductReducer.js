import { ActionTypes } from "../contants/action-types";

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}