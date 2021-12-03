exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('apprentice_applied_job').del()
    .then(function () {
      // Inserts seed entries
      return knex('apprentice_applied_job').insert([
        {
          id: 1,
          user_id: 1,
          job_id: 1,
          status: 'pending',
          applied_date: '2019-01-01'
        }
      ])
    })
}
