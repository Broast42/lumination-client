
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
    USERINFO_START,
    USERINFO_SUCCESS,
    USERINFO_FAIL, 
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
    isFetchingInfo: false,
    userInfoExists: false,
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
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                justRegistered: true,
                error: null
            }
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
                isRegistering: false,
            }
        case USERINFO_START:
            return {
                ...state,
                isFetchingInfo: true,
            }
        case USERINFO_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetchingInfo: false,
                userInfoExists: true,
                isAuthorized: true,
            }
        case USERINFO_FAIL:
            return {
                ...state,
                isFetchingInfo: false,
                error: action.payload,
            }
        default:
            return state
    }
}