exports.up = function (knex) {
  return knex.schema.createTable('apprentice_profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.integer('location_id').references('id').inTable('locations')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_profiles')
}
