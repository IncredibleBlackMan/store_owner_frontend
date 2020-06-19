import { combineReducers } from 'redux';
import constants from '../constants';
import initialState from './initialState';

const { CREATE_PRODUCT, LIST_PRODUCTS, GET_PRODUCT } = constants;

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
                product: payload.data.product,
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

const fetchProduct = (state = initialState.product, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${GET_PRODUCT}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${GET_PRODUCT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                product: {
                    ...payload.data.product,
                    subtypes: payload.data.product.subtypes,
                }
            };
        case `${GET_PRODUCT}_REJECTED`:
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
    fetchProduct,
    listProducts
})
