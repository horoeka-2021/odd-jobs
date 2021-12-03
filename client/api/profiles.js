import request from 'superagent'

export function getProfile (auth0Id) {
  return request.get('/api/v1/members')
    .send({ auth0_id: auth0Id })
    .then((res) => {
      console.log('returned profile', res.body)
      return res.body
    })
}
