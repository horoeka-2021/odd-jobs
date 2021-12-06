exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('gender').del()
    .then(function () {
      // Inserts seed entries
      return knex('gender').insert([
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Not Specified' }
      ])
    })
}
