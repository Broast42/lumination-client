import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_START, 
    LOGOUT_FAIL, 
    LOGOUT_SUCCESS,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL, 
} from '../actions/index';

const initialState = {
    user:{
        id: -1,
        username: ""
    },
    isAuthorizing: false,
    isAuthorized: false,
    isLoggingOut: false,
    isRegistering: false,
    justRegistered: false,
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
                // user: {
                //     id: action.payload.id,
                //     username: action.payload.username,
                //     email: action.payload.email,
                // },
                user: action.payload,
                isAuthorizing: false,
                isAuthorized: true,
                justRegistered: false,
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
        case REGISTER_START:
            return {
                ...state,
                isRegistering: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                justRegistered: true
            }
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
                isRegistering: false,
            }
        default:
            return state
    }
}