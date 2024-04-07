// actions.js
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (userData) => ({
    type: LOGIN,
    payload: userData
});

export const decrement = () => ({
    type: LOGOUT
});
