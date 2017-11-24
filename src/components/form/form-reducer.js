import { ActionTypes } from './form-actions';

export const INITIAL_STATE = {
    name: '',
    surname: ''
};

export default function formReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionTypes.SET_NAME:
        console.log('setName')
            return {
                ...state,
                name: action.name
            };

        default:
            
            return state;
    }
};