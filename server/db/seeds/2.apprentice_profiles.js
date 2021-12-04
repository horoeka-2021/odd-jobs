exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('apprentice_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('apprentice_profiles').insert([
        { id: 1, user_id: 1, location_id: 2 },
        { id: 2, user_id: 1, location_id: 3 }
      ])
    })
}
