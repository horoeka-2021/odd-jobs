import { getJobById } from '../api/jobs'
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

export function fetchJobs (userID) {
  console.log('fetch jobs', userID)
  return (dispatch) => {
    dispatch(fetchJobsPending())
    return getJobById(userID)
      .then((jobs) => {
        console.log('jobs api', jobs)
        dispatch(fetchJobsSuccess(jobs))
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
