import { FETCH_JOBS_SUCCESS } from '../actions/jobs'

function jobs (state = [], action) {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return action.jobs
    default:
      return state
  }
}

export default jobs
