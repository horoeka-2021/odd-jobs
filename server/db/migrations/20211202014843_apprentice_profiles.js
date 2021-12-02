exports.up = function (knex) {
  return knex.schema.createTable('apprentice_profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.integer('location_id').references('id').inTable('locations')
    table.integer('experience_rating_id').references('id').inTable('experience_rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_profiles')
}
