exports.up = function (knex) {
  return knex.schema.createTable('apprentice_assigned_job', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.integer('job_id').references('id').inTable('jobs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.string('status').defaultTo('in progress')
    table.date('assigned_date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
