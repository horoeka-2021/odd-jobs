exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('service_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_types').insert([
        { id: 1, name: 'Plumber' },
        { id: 2, name: 'Electrician' },
        { id: 3, name: 'Carpenter' },
        { id: 4, name: 'Painter' },
        { id: 5, name: 'Landscaper' },
        { id: 6, name: 'Builder' },
        { id: 7, name: 'Gardener' },
        { id: 8, name: 'Developer' },
        { id: 9, name: 'Mechanic' },
        { id: 10, name: 'Tutor' }
      ])
    })
}
