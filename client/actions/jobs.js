import { getJobs } from '../api/jobs'
import { showError } from './error'

export const FETCH_JOBS_PENDING = 'FETCH_JOBS_PENDING'
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'

export function fetchJobsPending () {
  return {
    type: FETCH_JOBS_PENDING
  }
}

export function fetchJobsSuccess (jobs) {
  return {
    type: FETCH_JOBS_SUCCESS,
    jobs: jobs
  }
}

export function fetchJobs () {
  return (dispatch) => {
    dispatch(fetchJobsPending())
    return getJobs()
      .then((jobs) => {
        dispatch(fetchJobsSuccess(jobs))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
