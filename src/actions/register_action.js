import {REGISTER_STATE, REGISTER} from './actionType';

export const setRegisterPending = (isRegisterPending) => ({
    type: REGISTER_STATE.PENDING,
    isRegisterPending
})

export const setRegisterSuccess = (isRegisterSuccess) => ({
    type: REGISTER_STATE.SUCCESS,
    isRegisterSuccess,
})

export const setRegisterError = (isRegisterError) => ({
    type: REGISTER_STATE.ERROR,
    isRegisterError,
})

export const registerSubmit = () => ({
    type: REGISTER.SUBMIT,
})

export const emailRegisterOnchange = (email) => ({
    type: REGISTER.EMAIL_REGISTER_ONCHANGE,
    email
})

export const passwordRegisterOnchange = (password) => ({
    type: REGISTER.PASSWORD_REGISTER_ONCHANGE,
    password
})

export const passwordConfirmRegisterOnchange = (passwordConfirm) => ({
    type: REGISTER.PASSWORD_CONFIRM_REGISTER_ONCHANGE,
    passwordConfirm
})