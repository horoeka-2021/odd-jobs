exports.up = function (knex) {
  return knex.schema.createTable('service_types', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('service_types')
}
