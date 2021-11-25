// Action generator

import { getExamples } from '../api/example'

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

export function fetchExample () {
  return (dispatch) => {
    dispatch(fetchExamplePending())
    return getExamples()
      .then(example => {
        dispatch(fetchExampleSuccess(examples))
        return null
      })
      .catch((err) => ) {
        const errMessage = err.response?.text || err.errMessage
        dispatch(showError(errMessage))
      }
  }
}
