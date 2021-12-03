exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('experience_rating').del()
    .then(function () {
      // Inserts seed entries
      return knex('experience_rating').insert([
        { id: 1, name: 'Less than 6 months' },
        { id: 2, name: 'Less than 12 months' },
        { id: 3, name: 'Over 12 months' }
      ])
    })
}
