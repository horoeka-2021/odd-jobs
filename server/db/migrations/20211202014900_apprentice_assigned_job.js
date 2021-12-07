exports.up = function (knex) {
  return knex.schema.createTable('apprentice_assigned_job', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.integer('job_id').references('id').inTable('jobs')
    table.string('status').defaultTo('in progress')
    table.date('assigned_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
