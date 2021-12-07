import { FETCH_PROFILE_SUCCESS, ADD_PROFILE_SUCCESS } from '../actions/profiles'

function profiles (state = [], action) {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return action.profiles

    case ADD_PROFILE_SUCCESS:
      return action.newMember

    default:
      return state
  }
}

export default profiles
