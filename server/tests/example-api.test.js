require('regenerator-runtime/runtime')
const request = require('supertest')
const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db')

test('GET /examples returns all example records', () => {
  db.getExamples.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, count: 3, title: 'First', description: 'First row' },
      { id: 2, count: 4, title: 'Second', description: 'Second row' },
      { id: 3, count: 20, title: 'Third', description: 'Third row' }
    ])
  })

  return request(server)
    .get('/examples/api')
    .expect(200)
    .then((res) => {
      expect(res.body.examples).toHaveLength(3)
      expect(res.body.examples[0].title).toBe('First')
      expect(res.body.examples[1].description).toMatch('Second')
      expect(res.body.examples[2].count).toBe(20)
      return null
    })
})
