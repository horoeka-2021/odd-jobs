import request from 'superagent'

export function getJobs () {
  return request.get('/api/v1/jobs')
    .then((res) => res.body)
}

export function addJob (job, auth0Id, auth0Token) {
  return request.post('/api/v1/jobs')
    .set('Authorization', `Bearer ${auth0Token}`)
    .send({ job, auth0Id })
    .then(res => res.body)
    .catch((err) => console.log(err))
}
