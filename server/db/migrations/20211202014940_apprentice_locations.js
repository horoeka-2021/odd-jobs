exports.up = function (knex) {
  return knex.schema.createTable('apprentice_locations', (table) => {
    table.increment('id').primary()
    table.integer('apprentice_id').references('id').inTable('apprentice_profiles')
    table.integer('location_id').references('id').inTable('locations')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_locations')
}
