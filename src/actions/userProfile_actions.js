import {HANDLE_USER_PROFILE, UPDATE_PROFILE_STATE} from './actionType'

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

