const environment = process.env.NODE_ENV || 'local'

const knex = require('knex')
const config = require('./knexfile')[environment]
const database = knex(config)

module.exports = {
  getUser,

  getExamples,
  getAllJobs,
  getAllUsers,
  getAllMembers,
  getAllApprentices,

  getMemberByAuthId,
  getMemberByUserId,
  addNewMember,
  updateMember,
  getMemberJobsList,

  getJobDetails,
  addJobListing,
  updateJobListing,
  deleteJobListingById,
  getJobApplicant,
  getApplicantsList,

  getApprenticeByUserId,
  getApprenticeLocations
}

function getExamples (db = database) {
  return db('examples')
    .select()
}

function getUser (auth0Id, db = database) {
  return db('users')
    .select(
      'users.id as id',
      'users.name as name',
      'users.email as email',
      'users.phone as phone',
      'users.birth_date as birthDate',
      'users.gender_id as genderId'
    )
    .where('auth0_id', auth0Id)
    .first()
}

// UTILITY FUNCTIONS ===========================================================
function getAllJobs (db = database) {
  return db('jobs')
    .select()
}

function getAllUsers (db = database) {
  return db('users')
    .select()
}

function getAllMembers (db = database) {
  return db('member_profiles')
    .join('users', 'users.id', 'member_profiles.user_id')
    .select()
}

function getAllApprentices (db = database) {
  return db('apprentice_profiles')
    .join('users', 'users.id', 'apprentice_profiles.id')
    .select()
}

// ALL MEMBER FUNCTIONS ========================================================
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

function getMemberByUserId (userId, db = database) {
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
    .where('users.id', userId)
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
      gender_id: newMember.gender_id,
      location_id: newMember.location_id
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
      location_id: user.location_id
    })
}

function getMemberJobsList (userId, db = database) {
  return db('jobs')
    .where('created_member_id', userId)
    .select('jobs.title as jobsTitle',
      'jobs.id as jobsId')
}

// ALL JOB FUNCTIONS ===========================================================
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

function getJobApplicant (applicantId, db = database) {
  return db('users')
    .where('users.id', applicantId)
    .join(
      'jobs', 'jobs.created_member_id',
      'apprentice_service_types', 'apprentice_service_types.user_id',
      'apprentice_applied_jobs', 'apprentice_applied_jobs.user_id',
      'apprentice_locations', 'apprentice_locations.user_id',
      'experience_rating_id', 'experience_rating_id.user_id'
    )
    .select(
      'users.id as usersId',
      'users.name as usersName',
      'users.email as usersEmail',
      'users.phone as usersPhone',
      'users.birth_date as usersBirthDate',
      'apprentice_locations.locations_id as apprenticeLocationsId',
      'apprentice_service_types.service_types_id as apprenticeServiceTypesId',
      'experience_rating_id.rating as experienceRating',
      'apprentice_applied_jobs.id as apprenticeAppliedJobsId',
      'apprentice_applied_jobs.status as apprenticeAppliedStatus'
    )
    .first()
}

function getApplicantsList (jobId, db = database) {
  return db('applicants')
    .where('job_id', jobId)
    .select()
}

// ALL APPRENTICE FUNCTIONS ====================================================
function getApprenticeByUserId (userId, db = database) {
  return db('apprentice_profiles')
    .join('users', 'users.id', 'apprentice_profiles.id')
    .where('users.id', userId)
    .select(
      'users.id as userId',
      'users.name as name',
      'users.email as email',
      'users.phone as phone',
      'users.birth_date as birthDate',
      'users.gender_id as genderId',
      'apprentice_profiles.id as apprenticeId',
      'apprentice_profiles.experience_rating_id as experienceRatingId'
    )
    .first()
}

function getApprenticeLocations (userId, db = database) {
  return db('apprentice_locations')
    .where('user_id', userId)
    .select('location_id as locationId')
}
