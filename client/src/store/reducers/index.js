import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/index';

const initialState = {
    user:{
        id: -1,
        username: ""
    },
    isAuthorizing: false,
    isAuthorized: false,
    error: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_START:
            return{
                ...state,
                isAuthorizing: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    username: action.payload.username,
                    email: action.payload.email,
                },
                isAuthorizing: false,
                isAuthorized: true,
                error: null
        
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthorizing: false,
                error: action.payload
            }
        default:
            return state
    }
}