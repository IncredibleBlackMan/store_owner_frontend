import api from '../api';
import constants from '../constants';

const { LOGIN } = constants;

const login = credentials => ({
    type: LOGIN,
    payload: api({
        url: '/users/login',
        method: 'POST',
        data: credentials,
    }),
});

export default login;
