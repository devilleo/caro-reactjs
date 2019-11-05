import {LOGIN_STATE, LOGIN, LOGIN_MODAL, HANDLE_CLICK} from './actionType';

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
    type: HANDLE_CLICK.LOG_OUT
})

export const LoginModalOpen = () => ({
    type: LOGIN_MODAL.OPEN
})

export const LoginModalClose = () => ({
    type: LOGIN_MODAL.CLOSE
})

export const LoginWithFacebook = (response) => ({
    type: "LOGIN_WITH_FACEBOOK",
    response: response,
    typeLogin: ".facebook"
})

export const LoginWithGoogle = (response) => ({
    type: "LOGIN_WITH_GOOGLE",
    response: response,
    typeLogin: ".google"
})