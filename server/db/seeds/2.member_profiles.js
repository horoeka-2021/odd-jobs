exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('member_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('member_profiles').insert([
        { id: 1, user_id: 1, location_id: 1 },
        { id: 2, user_id: 2, location_id: 3 },
        { id: 3, user_id: 3, location_id: 2 }
      ])
    })
}
