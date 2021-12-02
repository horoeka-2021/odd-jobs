const environment = process.env.NODE_ENV || 'local'

const knex = require('knex')
const config = require('./knexfile')[environment]
const database = knex(config)

module.exports = {
  getExamples,
  getMember
}

function getExamples (db = database) {
  return db('examples')
    .select()
}

function getMember (auth0Id, db = database) {
  return db('member_profiles')
    .leftJoin('users', 'users.id', 'member_profiles.user_id')
    .select('users.id as id',
      'users.name as name',
      'users.email as email',
      'users.phone as phone',
      'users.birth_date as birthDate',
      'users.gender_id as genderId'
    )
    .where('users.auth0_id', auth0Id)
}
