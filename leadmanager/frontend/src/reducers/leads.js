import {GET_LEADS} from './../actions/types';

const initialState = {
    leads: []
};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_LEADS:
            return {
                ...state,
                leads: payload
            };
        default:
            return state;
    }
}
