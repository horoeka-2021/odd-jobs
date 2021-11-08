const config = require('./knexfile').development
const database = require('knex')(config)

module.exports = {
  getExamples
}

function getExamples (db = database) {
  return db('examples')
    .select()
}
