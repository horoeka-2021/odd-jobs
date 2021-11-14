exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('examples').del()
    .then(function () {
      // Inserts seed entries
      return knex('examples').insert([
        { id: 1, count: 3, title: 'First', description: 'First row' },
        { id: 2, count: 4, title: 'Second', description: 'Second row' },
        { id: 3, count: 20, title: 'Third', description: 'Third row' }
      ])
    })
}
