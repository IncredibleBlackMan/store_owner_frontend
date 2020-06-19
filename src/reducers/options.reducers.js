import { combineReducers } from 'redux';
import constants from '../constants';
import initialState from './initialState';

const { CREATE_OPTIONS, PRICE_OPTIONS } = constants;

const createOptions = (state = initialState.options, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${CREATE_OPTIONS}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case `${CREATE_OPTIONS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                message: payload.data.message,
            };
        case `${CREATE_OPTIONS}_REJECTED`:
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

const priceOptions = (state = initialState.options, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${PRICE_OPTIONS}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case `${PRICE_OPTIONS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                message: payload.data.message,
            };
        case `${PRICE_OPTIONS}_REJECTED`:
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
    createOptions,
    priceOptions
})
