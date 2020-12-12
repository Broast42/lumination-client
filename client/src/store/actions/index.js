import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = (creds, history) => dispatch =>{
    //console.log('working');
    dispatch({type: LOGIN_START})
    
    axios
        .post(`${process.env.REACT_APP_API}/auth/login`, creds)
        .then(res => {
            //console.log(res);
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