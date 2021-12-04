import request from 'superagent'

export function getProfile (auth0Id) {
  return request.post('/api/v1/members')
    .send({ auth0Id: auth0Id })
    .then((res) => {
      return res.body
    })
}

export function addProfile (newMember) {
  return request
    .post('/api/v1/members')
    .send(newMember)
}
