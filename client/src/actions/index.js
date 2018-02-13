import types from './types';
import axios from 'axios';

export function signin(cred){
    return dispatch => {
        axios.post('/auth/signin', cred).then(resp => {
            console.log('Signin Resp: ', resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        }).catch(err => {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Invalid Username or Password'
            });
        })
    }
}

export function signup(cred){
    return async dispatch => {
        try {
            const request = await axios.post('/auth/signup', cred);

            localStorage.setItem('token', request.data.token);

            dispatch({
                type: types.SIGN_UP
            });
        } catch(err){
            dispatch({
                type: types.AUTH_ERROR,
                error: 'There was an error processing this request'
            });
        }

    }
}