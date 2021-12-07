import request from 'superagent'

// get all the jobs
export function getJobs () {
  return request.get('/api/v1/jobs')
    .then((res) => res.body)
}

// get jobs by member ID
export function getJobById (id) {
  return request.get(`/api/v1/jobs/${id}`)
    .then((res) => res.body)
}

// get job by Job ID
export function getJobDetailById (id) {
  return request.get(`/api/v1/jobs/details/${id}`)
    .then((res) => res.body)
}

// add a new job under member profile /api/v1/jobs/new
export function addJob (newJob) {
  return request.post('/api/v1/jobs/new')
    .send({ newJob: newJob })
    .then((res) => {
      return res.body
    })
}
