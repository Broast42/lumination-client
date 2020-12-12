import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_START, LOGOUT_FAIL, LOGOUT_SUCCESS } from '../actions/index';

const initialState = {
    user:{
        id: -1,
        username: ""
    },
    isAuthorizing: false,
    isAuthorized: false,
    isLoggingOut: false,
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
        case LOGOUT_START:
            return {
                ...state,
                isLoggingOut: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...initialState
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}