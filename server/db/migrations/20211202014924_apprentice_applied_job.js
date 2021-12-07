exports.up = function (knex) {
  return knex.schema.createTable('apprentice_applied_job', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.integer('job_id').references('id').inTable('jobs')
    table.string('message')
    table.string('status').defaultTo('pending') // '' - not applied/applied/assigned
    table.date('applied_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_applied_job')
}
