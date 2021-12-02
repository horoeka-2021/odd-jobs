exports.up = function (knex) {
  return knex.schema.createTable('apprentice_assigned_job', (table) => {
    table.increments('id').primary()
    table.integer('apprentice_profile_id').references('id').inTable('apprentice_profile')
    table.integer('job_id').references('id').inTable('jobs')
    table.string('status')
    table.integer('assigned_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
