import { FETCH_EXAMPLE_SUCCESS } from '../actions/examples'

function examples (state = [], action) {
  switch (action.type) {
    case FETCH_EXAMPLE_SUCCESS:
      return action.examples
    default:
      return state
  }
}

export default examples
