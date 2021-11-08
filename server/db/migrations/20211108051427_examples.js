exports.up = function (knex) {
  return knex.schema.createTable('examples', (table) => {
    table.increments('id').primary()
    table.integer('count')
    table.string('title')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('examples')
}
