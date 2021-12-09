import { getProfile, addProfile } from '../api/profiles'
import { showError } from './error'

export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const ADD_PROFILE_PENDING = 'ADD_PROFILE_PENDING'
export const ADD_PROFILE_SUCCESS = 'ADD_PROFILE_SUCCESS'

export function fetchProfilePending () {
  return {
    type: FETCH_PROFILE_PENDING
  }
}

export function fetchProfileSuccess (profiles) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profiles
  }
}

export function addProfilePending () {
  return {
    type: ADD_PROFILE_PENDING
  }
}

export function addProfileSuccess (newMember) {
  return {
    type: ADD_PROFILE_SUCCESS,
    newMember
  }
}

export function fetchProfile (auth0Id, history) {
  return (dispatch) => {
    dispatch(fetchProfilePending())
    return getProfile(auth0Id)
      .then((profile) => {
        dispatch(fetchProfileSuccess(profile))
        // check if the user has community member profile
        if (profile?.id === undefined) {
          // if no profile returns ==> move to member creation page
          history.push('/members/new')
        } else {
          // if there is member profile ==> member default
          history.push('/member')
        }
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
        // eslint-disable-next-line no-console
        console.error(errMessage)
      })
  }
}

export function addMember (newMember, history) {
  return (dispatch) => {
    dispatch(addProfilePending())
    // API post order to server
    return addProfile(newMember)
      .then((member) => {
        dispatch(addProfileSuccess(member))
        history.push('/')
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
        // eslint-disable-next-line no-console
        console.error(errMessage)
      })
  }
}
