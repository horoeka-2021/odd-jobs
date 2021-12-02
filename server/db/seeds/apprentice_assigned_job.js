exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('apprentice_assigned_job').del()
    .then(function () {
      // Inserts seed entries
      return knex('apprentice_assigned_job').insert([
        {
          id: 1,
          apprentice_profile_id: 1,
          job_id: 1,
          status: 'pending',
          assigned_date: '2019-01-01'
        }
      ])
    })
}
