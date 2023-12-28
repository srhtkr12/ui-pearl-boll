// AuthService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'https://your-api-url.com';

export const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
            const { token } = response.data;
            AuthService.setToken(token);
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    },

    setToken: (token) => {
        Cookies.set('token', token, { expires: 7 }); // Set the token in a cookie
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the token in the Axios header
    },

    logout: () => {
        Cookies.remove('token');
        delete axios.defaults.headers.common['Authorization'];
    },

    isAuthenticated: () => {
        return !!Cookies.get('token');
    },
};
