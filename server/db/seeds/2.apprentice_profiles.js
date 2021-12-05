exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('apprentice_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('apprentice_profiles').insert([
        { id: 1, user_id: 1 },
        { id: 2, user_id: 3 },
        { id: 3, user_id: 3 },
        { id: 4, user_id: 4 },
        { id: 5, user_id: 4 },
        { id: 6, user_id: 5 },
        { id: 7, user_id: 5 },
        { id: 8, user_id: 6 },
        { id: 9, user_id: 6 },
        { id: 10, user_id: 3 },
        { id: 11, user_id: 4 },
        { id: 12, user_id: 5 },
        { id: 13, user_id: 6 },
        { id: 14, user_id: 1 }
      ])
    })
}
