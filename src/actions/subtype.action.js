import api from '../api';
import constants from '../constants';

const { CREATE_OPTIONS, PRICE_OPTIONS } = constants;

export const createOptionsAction = (program_id, subtype_id, data) => ({
    type: CREATE_OPTIONS,
    payload: api({
        url: `/products/${program_id}/subtypes/${subtype_id}/subtype_options`,
        method: 'POST',
        data: { options: [data] },
    }),
});

export const priceOptionsAction = (program_id, data) => ({
    type: PRICE_OPTIONS,
    payload: api({
        url: `/products/${program_id}/subtype_options_pricing`,
        method: 'POST',
        data: { subtype_pricing: data },
    }),
});
