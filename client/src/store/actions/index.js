import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = (creds, history) => dispatch =>{
    
    dispatch({type: LOGIN_START})
    
    axios
        .post(`${process.env.REACT_APP_API}/auth/login`, creds)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.id)
            localStorage.setItem('username', res.data.username)
            localStorage.setItem('email', res.data.email)
            history.push("/home")
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAIL, payload: err.response })
        })
    

}

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const logout = (history) => dispatch => {
    dispatch({type: LOGOUT_START})

    try{
        dispatch({type: LOGOUT_SUCCESS});
        localStorage.clear();
        history.push("/");

    } catch (err) {
        dispatch({type: LOGOUT_FAIL, payload: err.response });

    }
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = (userinfo, history) => dispatch => {
    
    dispatch({type: REGISTER_START})

    axios
        .post(`${process.env.REACT_APP_API}/auth/register`, userinfo)
        .then(res =>{
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            history.push("/")
        })
        .catch(err => {
            dispatch({type: REGISTER_FAIL, payload: err.response})
        })
        
}

export const USERINFO_START = "USERINFO_START";
export const USERINFO_SUCCESS = "USERINFO_SUCCESS";
export const USERINFO_FAIL = "USERINFO_FAIL";

export const getUserInfo = (id) => dispatch => {
    dispatch({type: USERINFO_START})

    axios
        .get(`${process.env.REACT_APP_API}/users/userinfo/${id}`)
        .then(res => {
            dispatch({type: USERINFO_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: USERINFO_FAIL, payload: err.response})
        })
}