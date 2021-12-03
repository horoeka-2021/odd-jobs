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
    type: FETCH_PROFILE_SUCCESS,
    profiles
  }
}

export function fetchProfile (auth0Id, history) {
  return (dispatch) => {
    dispatch(fetchProfilePending())
    return getProfile(auth0Id)
      .then((profile) => {
        dispatch(fetchProfileSuccess(profile))
        console.log(profile)
        history.push(`members/${profile.id}`)
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.error(errMessage)
      })
  }
}

// export function fetchAllProfiles () {
//   return (dispatch) => {
//     dispatch(fetchProfilePending())
//     // API post order to server
//     return getAllProfiles()
//       .then((profilesList) => {
//         console.log(profilesList)
//         dispatch(fetchProfileSuccess(profilesList))
//         return null
//       })
//       .catch((err) => {
//         const errMessage = err.response?.text || err.message
//         console.error(errMessage)
//       })
//   }
// }
