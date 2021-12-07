exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.integer('service_type_id').references('id').inTable('service_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('created_member_id').references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('location_id').references('id').inTable('locations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.string('title')
    table.string('description')
    table.string('status').defaultTo('open')
    table.boolean('paid')
    table.date('expected_start')
    table.date('expected_end')
    table.date('actual_start')
    table.date('actual_end')
    table.date('created_date').defaultTo(knex.fn.now())
    table.date('updated_date')
    table.date('deleted_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
