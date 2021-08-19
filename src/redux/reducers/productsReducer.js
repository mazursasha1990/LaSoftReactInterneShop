import { ActionTypes } from "../contants/action-types";

const INITIAL_STATE = {
    products: [],

};

export const productsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };

        default:
            return state;
    }
}

