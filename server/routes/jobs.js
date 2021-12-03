const express = require('express')
const router = express.Router()

const db = require('../db/db')

// API endpoint example
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const jobs = await db.getMemberJobsList(userId)
    res.json(jobs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/details/:jobId', async (req, res) => {
  const jobId = req.params.jobId
  try {
    const jobDetails = await db.getJobDetails(jobId)
    res.json(jobDetails)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

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
    res.sendStatus(201)
    res.redirect(`/jobs/details/${newJobListing.id}`)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

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
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
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
