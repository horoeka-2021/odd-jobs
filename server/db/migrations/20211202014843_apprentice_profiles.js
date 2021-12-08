exports.up = function (knex) {
  return knex.schema.createTable('apprentice_profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_profiles')
}
