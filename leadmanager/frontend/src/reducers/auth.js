import {USER_LOADED, USER_LOADING, AUTH_ERROR} from '../actions/types';


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
        case AUTH_ERROR:
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