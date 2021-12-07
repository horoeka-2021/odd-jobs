exports.up = function (knex) {
  return knex.schema.createTable('apprentice_applied_job', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('job_id').references('id').inTable('jobs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.string('message')
    table.string('status') // '' - not applied/applied/assigned
    table.date('applied_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('apprentice_applied_job')
}
