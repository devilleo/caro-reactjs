import {HANDLE_USER_PROFILE, UPDATE_PROFILE_STATE, CHANGE_PASSWORD_MODAL, CHANGE_PASSWORD, CHANGE_PASSWORD_STATE} from './actionType'

export const setUpdateProfilePending = (isUpdateProfilePending) => ({
    type: UPDATE_PROFILE_STATE.PENDING,
    isUpdateProfilePending
})

export const setUpdateProfileSuccess = (isUpdateProfileSuccess) => ({
    type: UPDATE_PROFILE_STATE.SUCCESS,
    isUpdateProfileSuccess,
})

export const setUpdateProfileError = (isUpdateProfileError) => ({
    type: UPDATE_PROFILE_STATE.ERROR,
    isUpdateProfileError,
})

export const updateProfile = () => ({
    type: HANDLE_USER_PROFILE.UPDATE,
})

export const refreshProfile = (userInfo) => ({
    type: HANDLE_USER_PROFILE.REFRESH,
    userInfo
})

export const firstNameProfileOnchange = (firstName) => ({
    type: HANDLE_USER_PROFILE.FIRSTNAME_PROFILE__ONCHANGE,
    firstName
})

export const lastNameProfileOnchange = (lastName) => ({
    type: HANDLE_USER_PROFILE.LASTNAME_PROFILE__ONCHANGE,
    lastName
})

export const addressProfileOnchange = (address) => ({
    type: HANDLE_USER_PROFILE.ADDRESS_PROFILE__ONCHANGE,
    address
})

export const cityProfileOnchange = (city) => ({
    type: HANDLE_USER_PROFILE.CITY_PROFILE__ONCHANGE,
    city
})

export const countryProfileOnchange = (country) => ({
    type: HANDLE_USER_PROFILE.COUNTRY_PROFILE__ONCHANGE,
    country
})

export const aboutMeProfileOnchange = (aboutMe) => ({
    type: HANDLE_USER_PROFILE.ABOUTME_PROFILE__ONCHANGE,
    aboutMe
})

export const changePasswordModalOpen = () => ({
    type: CHANGE_PASSWORD_MODAL.OPEN,
})

export const changePasswordModalClose = () => ({
    type: CHANGE_PASSWORD_MODAL.CLOSE,
})

export const changePasswordSubmit = () => ({
    type: CHANGE_PASSWORD.SUBMIT,
})

export const oldPasswordOfChangePasswordOnChange = (oldPassword) => ({
    type: CHANGE_PASSWORD.OLD_PASSWORD_ONCHANGE,
    oldPassword
})

export const newPasswordOfChangePasswordOnChange = (newPassword) => ({
    type: CHANGE_PASSWORD.NEW_PASSWORD_ONCHANGE,
    newPassword
})

export const confirmNewPasswordOfChangePasswordOnChange = (confirmNewPassword) => ({
    type: CHANGE_PASSWORD.CONFIRM_NEW_PASSWORD_ONCHANGE,
    confirmNewPassword
})

export const setChangePasswordPending = (isChangePasswordPending) => ({
    type: CHANGE_PASSWORD_STATE.PENDING,
    isChangePasswordPending
})

export const setChangePasswordSuccess = (isChangePasswordSuccess) => ({
    type: CHANGE_PASSWORD_STATE.SUCCESS,
    isChangePasswordSuccess,
})

export const setChangePasswordError = (isChangePasswordError) => ({
    type: CHANGE_PASSWORD_STATE.ERROR,
    isChangePasswordError,
})
