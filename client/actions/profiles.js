import { getProfile } from '../api/profiles'

export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'

export function fetchProfilePending () {
  return {
    type: FETCH_PROFILE_PENDING
  }
}

export function fetchProfileSuccess (profiles) {
  return {
    type: FETCH_PROFILE_PENDING,
    profiles: profiles
  }
}

export function fetchProfile (auth0Id) {
  return (dispatch) => {
    dispatch(fetchProfilePending())
    return getProfile(auth0Id)
      .then((profile) => {
        dispatch(fetchProfileSuccess(profile))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.error(errMessage)
      })
  }
}
