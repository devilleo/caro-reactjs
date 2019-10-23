import {LOGIN_STATE, LOGIN} from './actionType';

export const setLoginPending = (isLoginPending) => ({
    type: LOGIN_STATE.PENDING,
    isLoginPending
})

export const setLoginSuccess = (isLoginSuccess) => ({
    type: LOGIN_STATE.SUCCESS,
    isLoginSuccess,
})

export const setLoginError = (isLoginError) => ({
    type: LOGIN_STATE.ERROR,
    isLoginError,
})

export const loginSubmit = () => ({
    type: LOGIN.SUBMIT,
})

export const emailOnchange = (email) => ({
    type: LOGIN.EMAIL_ONCHANGE,
    email
})

export const passwordOnchange = (password) => ({
    type: LOGIN.PASSWORD_ONCHANGE,
    password
})

export const logOut = () => ({
    type: "LOG_OUT"
})