import request from 'superagent'

export function getJobs () {
  return request.get('/api/v1/jobs')
    .then((res) => res.body)
}
