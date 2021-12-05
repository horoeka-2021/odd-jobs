import { FETCH_EXAMPLE_PENDING, FETCH_EXAMPLE_SUCCESS } from '../actions/examples'
import { FETCH_PROFILE_PENDING, FETCH_PROFILE_SUCCESS, ADD_PROFILE_PENDING, ADD_PROFILE_SUCCESS } from '../actions/profiles'
import { FETCH_JOBS_PENDING, FETCH_JOBS_SUCCESS } from '../actions/jobs'
import { SHOW_ERROR } from '../actions/error'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_EXAMPLE_PENDING:
    case FETCH_PROFILE_PENDING:
    case FETCH_JOBS_PENDING:
    case ADD_PROFILE_PENDING:
      return true
    case FETCH_EXAMPLE_SUCCESS:
    case FETCH_PROFILE_SUCCESS:
    case FETCH_JOBS_SUCCESS:
    case ADD_PROFILE_SUCCESS:
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
