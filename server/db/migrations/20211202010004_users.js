exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.integer('gender_id').notNullable().references('id').inTable('gender')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.string('auth0_id').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('phone').notNullable()
    table.date('birth_date').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
