exports.up = function (knex) {
  return knex.schema.createTable('member_profiles', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('location_id').references('id').inTable('locations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('member_profiles')
}
