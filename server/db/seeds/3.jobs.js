exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          id: 1,
          title: 'Build me a website',
          description: 'I need a website built for my business',
          service_type_id: 8,
          paid: true,
          created_member_id: 1,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 1,
          status: 'open'
        },
        {
          id: 2,
          title: 'Fix my car',
          description: 'I need a car fixed',
          service_type_id: 9,
          paid: true,
          created_member_id: 1,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 2,
          status: 'pending'
        }
      ])
    })
}
