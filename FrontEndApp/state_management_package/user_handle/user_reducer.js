import { LOGIN, LOGOUT } from "./user_action";

// reducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export default userReducer;
