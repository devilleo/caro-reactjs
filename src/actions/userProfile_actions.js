import {HANDLE_USER_PROFILE} from './actionType'

export const updateProfile = (newProfileInfo) => ({
    type: HANDLE_USER_PROFILE.UPDATE,
    newProfileInfo
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