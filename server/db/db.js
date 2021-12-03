const environment = process.env.NODE_ENV || 'local'

const knex = require('knex')
const config = require('./knexfile')[environment]
const database = knex(config)

module.exports = {
  getExamples,
  getMemberByAuthId,
  addNewMember,
  updateMember,
  getMemberJobsList,
  getJobDetails,
  addJobListing,
  updateJobListing,
  deleteJobListingById
}

function getExamples (db = database) {
  return db('examples')
    .select()
}

function getMemberByAuthId (auth0Id, db = database) {
  return db('member_profiles')
    .leftJoin('users', 'users.id', 'member_profiles.user_id')
    .select(
      'users.id as id',
      'users.name as name',
      'users.email as email',
      'users.phone as phone',
      'users.birth_date as birthDate',
      'users.gender_id as genderId'
    )
    .where('users.auth0_id', auth0Id)
    .first()
}

function addNewMember (newMember, db = database) {
  return db('users')
    .insert(newMember)
    .returning({
      name: newMember.name,
      email: newMember.email,
      phone: newMember.phone,
      birth_date: newMember.birth_date,
      gender_id: newMember.gender_id
    })
}

function updateMember (user, db = database) {
  return db('users')
    .where('id', user.user_id)
    .update({ 
      name: user.name,
      email: user.email,
      phone: user.phone,
      birth_date: user.birth_date,
      location_id: user.location_id,
    })
}

function getMemberJobsList (userId, db = database) {
  return db('jobs')
  .where('created_member_id', userId)
  .select('jobs.title as jobsTitle',
  'jobs.id as jobsId')
}

function getJobDetails (userId, db = database) {
  return db('jobs')
    .where('created_member_id', userId)
    .leftJoin('locations', 'locations.id', 'jobs.location_id')
    .leftJoin('service_types', 'service_types.id', 'jobs.service_type_id')
    .select(
      'jobs.id as id',
      'jobs.title as jobTitle',
      'jobs.description as jobDescription',
      'jobs.paid as jobPaid',
      'jobs.expected_start as jobExpectedStart',
      'jobs.expected_end as jobExpectedEnd',
      'jobs.actual_start as jobActualStart',
      'jobs.actual_end as jobActualEnd',
      'jobs.created_date as jobCreatedDate',
      'jobs.updated_date as jobUpdatedDate',
      'jobs.status as jobStatus',
      'locations.name as locationName',
      'service_types.name as serviceTypeName'
    )
    .first()
}

function addJobListing (job, db = database) {
  return db('jobs')
    .insert(job)
    .returning({
      id: job.id,
      title: job.title,
      description: job.description,
      paid: job.paid,
      expected_start: job.expected_start,
      expected_end: job.expected_end,
      actual_start: job.actual_start,
      actual_end: job.actual_end,
      created_date: job.created_date,
      status: job.status,
      created_member_id: job.created_member_id,
      location_id: job.location_id,
      service_type_id: job.service_type_id
    })
}

function updateJobListing (job, db = database) {
  return db('jobs')
    .where('id', job.id)
    .update({
      title: job.title,
      description: job.description,
      paid: job.paid,
      expected_start: job.expected_start,
      expected_end: job.expected_end,
      actual_start: job.actual_start,
      actual_end: job.actual_end,
      updated_date: job.updated_date,
      status: job.status,
      location_id: job.location_id,
      service_type_id: job.service_type_id
    })
}

function deleteJobListingById (jobId, db = database) {
  return db('jobs')
    .where('id', jobId)
    .del()
}

