import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: null,
                loading: null
            };
        default:
            return state;
    }
} 