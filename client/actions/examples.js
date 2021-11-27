// Action generator

import { getExamples } from '../api/example'
import { showError } from './error'

export const FETCH_EXAMPLE_PENDING = 'FETCH_EXAMPLE_PENDING'
export const FETCH_EXAMPLE_SUCCESS = 'FETCH_EXAMPLE_SUCCESS'

function fetchExamplePending () {
  return {
    type: FETCH_EXAMPLE_PENDING
  }
}

function fetchExampleSuccess (examples) {
  return {
    type: FETCH_EXAMPLE_SUCCESS,
    examples
  }
}

export function fetchExamples () {
  return async (dispatch) => {
    try {
      dispatch(fetchExamplePending())
      const examples = await getExamples()
      console.log('from server', examples)
      dispatch(fetchExampleSuccess(examples))
    } catch (error) {
      const errMessage = error.response?.text || error.errMessage
      dispatch(showError(errMessage))
    }
  }
}
