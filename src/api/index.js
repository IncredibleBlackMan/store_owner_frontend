
import axios from 'axios';
import config from '../config';

export const authUser = () => {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
        return null;
    }
};

export const authUserHeader = () => {
    const user = authUser();
    if (user && user.token) {
        return {
            Authorization: user.token,
        };
    }
    return {};
};

export const client = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        ...authUserHeader(),
    }
});

export default ({ method, url, data }) => client({
    url,
    method,
    data,
});
