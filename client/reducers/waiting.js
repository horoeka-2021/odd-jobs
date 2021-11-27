import { FETCH_EXAMPLE_PENDING, FETCH_EXAMPLE_SUCCESS } from '../actions/examples'

function waiting (state = false, action) {
  switch (action.type) {
    case FETCH_EXAMPLE_PENDING:
      return true
    case FETCH_EXAMPLE_SUCCESS:
      return false
    default:
      return state
  }
}

export default waiting
