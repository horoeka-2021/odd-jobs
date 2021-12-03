import request from 'superagent'

export function getProfile (auth0Id) {
  console.log('inside getProfile', auth0Id)
  return request.post('/api/v1/members')
    .send({ auth0Id: auth0Id })
    .then((res) => {
      console.log('returned profile', res)
      console.log('returned profile', res.body)
      return res.body
    })
}
