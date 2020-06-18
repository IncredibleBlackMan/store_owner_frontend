import constants from '../constants';
import initialState from './initialState';

const { LOGIN } = constants;

export default function (state = initialState.login, action) {
    const { payload, type } = action;

    switch (type) {
        case `${LOGIN}_PENDING`:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case `${LOGIN}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: payload.data.auth_token,
            };
        case `${LOGIN}_REJECTED`:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload.response.data,
            };
        default:
            return state;
    }
};
