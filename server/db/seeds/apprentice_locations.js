exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('apprentice_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('apprentice_locations').insert([
        { id: 1, apprentice_id: 1, location_id: 1 },
        { id: 2, apprentice_id: 1, location_id: 2 },
        { id: 3, apprentice_id: 1, location_id: 3 }
      ])
    })
}
