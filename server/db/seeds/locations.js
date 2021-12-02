exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { id: 1, name: 'North Auckland' },
        { id: 2, name: 'South Auckland' },
        { id: 3, name: 'West Auckland' },
        { id: 4, name: 'East Auckland' },
        { id: 5, name: 'Central Auckland' }
      ])
    })
}
