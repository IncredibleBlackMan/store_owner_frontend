import api from '../api';
import constants from '../constants';

const { CREATE_PRODUCT, LIST_PRODUCTS, GET_PRODUCT } = constants;

export const createProductAction = credentials => ({
    type: CREATE_PRODUCT,
    payload: api({
        url: '/products',
        method: 'POST',
        data: { product: credentials },
    }),
});

export const listProducts = () => ({
    type: LIST_PRODUCTS,
    payload: api({
        url: '/products',
        method: 'GET',
    }),
});

export const fetchProductAction = (id) => ({
    type: GET_PRODUCT,
    payload: api({
        url: `/products/${id}`,
        method: 'GET',
    }),
});
