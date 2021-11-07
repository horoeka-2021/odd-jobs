const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('Example - testing route with supertest', async () => {
  const res = await request(server)
    .get('/example')

  expect(res.statusCode).toEqual(200)
  expect(res.text).toMatch('React component will be shown below')
})

test('Example - testing route with supertest and cheerio', async () => {
  const res = await request(server).get('/example')
  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch('example message for testing')
})
