require('regenerator-runtime/runtime')
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
  const res = await request(server)
    .get('/example/param/123')

  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch('example message for testing')
  expect($('#param').text()).toMatch('123')
})

test('Example - sending query string', async () => {
  const res = await request(server)
    .get('/example/query')
    .query({ key: 'value' })

  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch('key')
  expect($('#param').text()).toMatch('value')
})

test('Example POST - sending form data', async () => {
  const formData = { userId: 101, content: 'Testing POST' }
  const res = await request(server)
    .post('/example/posttest/')
    .send(formData)

  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch(`Hello from userID:${formData.userId}`)
  expect($('#param').text()).toMatch(`The content:${formData.content}`)
})
