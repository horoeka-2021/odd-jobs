const config = require('./knexfile').test
const testDB = require('knex')(config)

const db = require('./db')

beforeAll(() => {
  return testDB.migrate.latest()
})

beforeEach(() => {
  return testDB.seed.run()
})

afterAll(() => {
  return testDB.destroy()
})

test('Example - testing get all the records from the example table', () => {
  return db.getExamples(testDB)
    .then(result => {
      expect(result).toHaveLength(3)
      return null
    })
})
