import { FETCH_PROFILE_SUCCESS } from '../actions/profiles'

function profiles (state = [], action) {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.profile
    default:
      return state
  }
}

export default profiles
