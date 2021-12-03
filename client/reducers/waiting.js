import { FETCH_EXAMPLE_PENDING, FETCH_EXAMPLE_SUCCESS } from '../actions/examples'
import { FETCH_PROFILE_PENDING, FETCH_PROFILE_SUCCESS } from '../actions/profiles'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_EXAMPLE_PENDING:
    case FETCH_PROFILE_PENDING:
      return true
    case FETCH_EXAMPLE_SUCCESS:
    case FETCH_PROFILE_SUCCESS:
      return false
    default:
      return state
  }
}

export default waiting
