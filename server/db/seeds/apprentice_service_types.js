exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('apprentice_service_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('apprentice_service_types').insert([
        {
          id: 1,
          user_id: 1,
          service_type_id: 1,
          experience_rating_id: 1
        },
        {
          id: 2,
          user_id: 1,
          service_type_id: 2,
          experience_rating_id: 2
        },
        {
          id: 3,
          user_id: 1,
          service_type_id: 1,
          experience_rating_id: 3
        },
        {
          id: 4,
          user_id: 1,
          service_type_id: 1,
          experience_rating_id: 1
        },
        {
          id: 5,
          user_id: 1,
          service_type_id: 1,
          experience_rating_id: 2
        },
        {
          id: 6,
          user_id: 1,
          service_type_id: 1,
          experience_rating_id: 3
        }
      ])
    })
}
