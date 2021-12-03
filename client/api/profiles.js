import request from 'superagent'

export function getProfile () {
  return request.get('/api/v1/members')
    .then((res) => res.body)
}
