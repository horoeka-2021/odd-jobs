exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'google-oauth2|102751185187681222786',
          name: 'Goretti Alani',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 1
        },
        {
          id: 2,
<<<<<<< HEAD
          auth0_id: 'google-oauth2|1019217409990120824471',
          name: 'Nathan TheDog',
||||||| 756974c
          auth0_id: 'google-oauth2|101921740999012082447',
          name: 'Nathan TheDog',
=======
          auth0_id: 'google-oauth2|101921740999012082447',
          name: 'Tommy Yoon',
>>>>>>> dev
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 3
        },
        {
          id: 3,
          auth0_id: 'google-oauth2|101921740999012082447',
          name: 'Nathan Rowe',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 2
        },
        {
          id: 4,
          auth0_id: 'google-oauth2|101921740999012082447',
          name: 'Crystal Chan',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 1
        },
        {
          id: 5,
          auth0_id: 'google-oauth2|101921740999012082447',
          name: 'Nicky Plantita',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 2
        },
        {
          id: 6,
          auth0_id: 'google-oauth2|101921740999012082447',
          name: 'Ying Chiu',
          email: 'test.test@gmail.com',
          phone: '1234567890',
          birth_date: '01/01/2000',
          gender_id: 3
        }
      ])
    })
}
