const environment = process.env.NODE_ENV || 'local'

const knex = require('knex')
const config = require('./knexfile')[environment]
const database = knex(config)

module.exports = {
  getExamples
}

function getExamples (db = database) {
  return db('examples')
    .select()
}
