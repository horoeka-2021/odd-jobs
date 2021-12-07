exports.up = function (knex) {
  return knex.schema.createTable('apprentice_service_types', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('service_type_id').references('id').inTable('service_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('experience_rating_id').references('id').inTable('experience_rating')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_service_types')
}
