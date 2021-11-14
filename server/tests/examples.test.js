require('regenerator-runtime/runtime')
const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

// using async/await
test('Examples - testing route with supertest - async/await', async () => {
  const res = await request(server)
    .get('/examples')

  expect(res.statusCode).toEqual(200)
  expect(res.text).toMatch('React component will be shown below')
})

// using done
test('Examples - testing route with supertest - done()', (done) => {
  request(server)
    .get('/examples')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('Hello from HBS example')
      done()
    })
})

test('Examples - testing route with supertest and cheerio', async () => {
  const res = await request(server)
    .get('/examples/param/123')

  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch('example message for testing')
  expect($('#param').text()).toMatch('123')
})

test('Examples - sending query string', async () => {
  const res = await request(server)
    .get('/examples/query')
    .query({ key: 'value' })

  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch('key')
  expect($('#param').text()).toMatch('value')
})

test('Examples POST - sending form data', async () => {
  const formData = { userId: 101, content: 'Testing POST' }
  const res = await request(server)
    .post('/examples/posttest/')
    .send(formData)

  expect(res.statusCode).toEqual(200)
  const $ = cheerio.load(res.text)
  expect($('#msg').text()).toMatch(`Hello from userID:${formData.userId}`)
  expect($('#param').text()).toMatch(`The content:${formData.content}`)
})
