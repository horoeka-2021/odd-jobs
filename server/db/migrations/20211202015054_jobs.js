exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.integer('service_type_id').references('id').inTable('service_types')
    table.integer('created_member_id').references('id').inTable('member_profiles')
    table.integer('location_id').references('id').inTable('locations')
    table.string('title')
    table.string('description')
    table.string('status')
    table.boolean('paid')
    table.date('expected_start')
    table.date('expected_end')
    table.date('actual_start')
    table.date('actual_end')
    table.date('created_date')
    table.date('updated_date')
    table.date('deleted_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
