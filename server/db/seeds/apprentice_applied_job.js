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
          status: 'available',
          applied_date: '2019-01-01'
        },
        {
          id: 2,
          user_id: 3,
          job_id: 2,
          status: 'in_progress',
          applied_date: '2019-01-01'
        },
        {
          id: 3,
          user_id: 4,
          job_id: 3,
          status: 'in_progress',
          applied_date: '2019-01-01'
        },
        {
          id: 4,
          user_id: 5,
          job_id: 4,
          status: 'available',
          applied_date: '2019-01-01'
        },
        {
          id: 5,
          user_id: 6,
          job_id: 5,
          status: 'in_progress',
          applied_date: '2019-01-01'
        },
        {
          id: 6,
          user_id: 1,
          job_id: 6,
          status: 'cancelled',
          applied_date: '2019-01-01'
        },
        {
          id: 7,
          user_id: 3,
          job_id: 7,
          status: 'available',
          applied_date: '2019-01-01'
        },
        {
          id: 8,
          user_id: 4,
          job_id: 8,
          status: 'available',
          applied_date: '2019-01-01'
        },
        {
          id: 9,
          user_id: 5,
          job_id: 9,
          status: 'in_progress',
          applied_date: '2019-01-01'
        },
        {
          id: 10,
          user_id: 6,
          job_id: 10,
          status: 'in_progress',
          applied_date: '2019-01-01'
        }
      ])
    })
}
