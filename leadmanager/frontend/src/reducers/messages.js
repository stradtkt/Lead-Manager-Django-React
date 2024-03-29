import {GET_MESSAGES, CREATE_MESSAGE} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_MESSAGES:
            return {
                payload
            };
        case CREATE_MESSAGE:
            return (state = payload);
        default:
            return state;
    }
}