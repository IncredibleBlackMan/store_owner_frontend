import api from '../api';
import constants from '../constants';

const { CREATE_OPTIONS, PRICE_OPTIONS } = constants;

export const createOptionsAction = (product_id, subtype_id, data) => ({
    type: CREATE_OPTIONS,
    payload: api({
        url: `/products/${product_id}/subtypes/${subtype_id}/subtype_options`,
        method: 'POST',
        data: { options: data },
    }),
});

export const priceOptionsAction = (product_id, data) => {
    return{
        type: PRICE_OPTIONS,
        payload: api({
            url: `/products/${product_id}/subtype_option_pricing`,
            method: 'POST',
            data: { subtype_pricing: data },
        }),
    }
};
