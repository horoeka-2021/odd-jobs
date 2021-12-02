exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 12,
          name: 'Sable TheDog',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 1
        },
        {
          id: 2,
          auth0_id: 13,
          name: 'Nathan TheDog',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 3
        },
        {
          id: 3,
          auth0_id: 14,
          name: 'Tommy TheDog',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 2
        }
      ])
    })
}
