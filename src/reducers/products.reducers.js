import { combineReducers } from 'redux';
import constants from '../constants';
import initialState from './initialState';

const { CREATE_PRODUCT, LIST_PRODUCTS } = constants;

const createProduct = (state = initialState.product, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${CREATE_PRODUCT}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${CREATE_PRODUCT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                message: payload.data.message,
            };
        case `${CREATE_PRODUCT}_REJECTED`:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload,
            };
        default:
            return state;
    }
};

const listProducts = (state = initialState.listProducts, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${LIST_PRODUCTS}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${LIST_PRODUCTS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                products: payload.data.products,
            };
        case `${LIST_PRODUCTS}_REJECTED`:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload,
            };
        default:
            return state;
    }
};

export default combineReducers({
    createProduct,
    listProducts
})
