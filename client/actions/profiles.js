import { getProfile, addProfile } from '../api/profiles'

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
        console.log('fetchProfile - profile', profile)
        dispatch(fetchProfileSuccess(profile))
        if (typeof profile.id === 'undefined') {
          history.push('/members/new')
        } else {
          console.log('hello exisiting')
          history.push('/member')
        }
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
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
        console.log('new member', member)
        dispatch(addProfileSuccess(member))
        history.push('/members')
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.error(errMessage)
      })
  }
}
