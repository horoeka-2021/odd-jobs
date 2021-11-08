const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  getExamples
}

function getExamples (db = database) {
  return db('examples')
    .select()
}
