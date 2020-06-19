import api from '../api';
import constants from '../constants';

const { CREATE_PRODUCT, LIST_PRODUCTS } = constants;

export const createProduct = credentials => ({
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
