const express = require('express')
const router = express.Router()

const db = require('../db/db')

// MEMBER =====================================================================
// GET route: /api/v1/jobs/1       (returns a list of jobs for a single member)
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const jobs = await db.getMemberJobsList(userId)
    console.log(`list of jobs: ${JSON.stringify(jobs)}`)
    res.json(jobs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// MEMBER =====================================================================
// GET route: /api/v1/jobs/2/applicants/12 (returns info on a single applicant)
router.get('/:userId/applicants/:applicantId', async (req, res) => {
  const userId = req.params.userId
  const applicantId = req.params.applicantId
  try {
    const applicant = await db.getJobApplicant(applicantId)
    console.log(`applicant: ${JSON.stringify(applicant)}`)
    res.json(applicant)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// MEMBER & APPRENTICE =========================================================
// GET route: /api/v1/jobs/details/2      (returns the details for a single job)
router.get('/details/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  try {
    const jobDetails = await db.getJobDetails(jobId)
    console.log(`jobDetails: ${jobDetails}`)
    res.json(jobDetails)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER ======================================================================
// DELETE route: /api/jobs/details/2          (deletes a single job from the db)
router.delete('/details/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  try {
    const deletedJobListing = await db.deleteJobListingById(jobId)
    console.log('deletedJobListing: ', deletedJobListing)
    res.json({ message: `Job ${jobId} successfully deleted` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER ======================================================================
// POST route: /api/v1/jobs/new         (adds a new job listing to the database)
router.post('/new', async (req, res) => {
  const {
    title,
    description,
    paid,
    locationId,
    expectedStart,
    expectedEnd,
    serviceTypeId
  } = req.body
  const jobListing = {
    title: title,
    description: description,
    paid: paid,
    location_id: locationId,
    expected_start: expectedStart,
    expected_end: expectedEnd,
    service_type_id: serviceTypeId
  }
  try {
    const newJobListing = await db.addJobListing(jobListing)
    console.log('newJobListing: ', newJobListing)
    res.json({ message: `Job ${newJobListing.id} successfully created` })
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// MEMBER ======================================================================
// POST route: /api/v1/jobs/edit/2       (updates a job listing in the database)
router.post('/edit/:jobId', async (req, res) => {
  const {
    title,
    description,
    paid,
    locationId,
    expectedStart,
    expectedEnd,
    serviceTypeId
  } = req.body
  const jobListing = {
    title: title,
    description: description,
    paid: paid,
    location_id: locationId,
    expected_start: expectedStart,
    expected_end: expectedEnd,
    service_type_id: serviceTypeId
  }
  try {
    const updatedJobListing = await db.updateJobListing(req.params.jobId, jobListing)
    console.log('updatedJobListing: ', updatedJobListing)
    res.json({ message: `Job ${updatedJobListing.id} successfully updated` })
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// UTILITY ====================================================================
// GET route: /api/v1/jobs/                        (returns a list of all jobs)
router.get('/', (req, res) => {
  db.getAllJobs()
    .then(jobs => {
      res.status(200)
      return res.json(jobs)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

// // API endpoint example
// router.get('/list', async (req, res) => {
//   try {
//     const members = await db.getMembers()
//     res.json(members)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: error.message })
//   }
// })

module.exports = router
