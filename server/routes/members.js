const express = require('express')
const router = express.Router()

// const checkJwt = require('../auth0')
const db = require('../db/db')

// =============================================================================
// PUT route: /api/v1/members/2/edit               (edit a member's information)
router.put('/:user_id/edit', async (req, res) => {
  const userId = req.params.user_id
  const { name, email, phone, locationId, birthDate } = req.body
  const member = {
    user_id: userId,
    name: name,
    email: email,
    phone: phone,
    location_id: locationId,
    birth_date: birthDate
  }
  try {
    const updatedMember = await db.updateMember(member)
    // console.log('updatedMember: ', updatedMember)
    res.status(200)
    res.json(updatedMember)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// =============================================================================
// GET route: /api/v1/members/           (get information about a single member)
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const member = await db.getMemberByUserId(userId)
    res.status(200)
    res.json(member)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// UTILITY =====================================================================
// GET route: /api/v1/members/                       (get a list of ALL members)
router.get('/', async (req, res) => {
  try {
    const members = await db.getAllMembers()
    res.status(200)
    res.json(members)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// =============================================================================
// POST route: /api/v1/users/signup                         (creates a new user)
router.post('/', async (req, res) => {
  const { name, email, phone, birthDate, genderId, auth0Id, locationId } = req.body
  const member = {
    auth0_id: auth0Id,
    name: name,
    email: email,
    phone: phone,
    birth_date: birthDate,
    gender_id: genderId
  }
  try {
    const addedMember = await db.addNewMember(member, locationId)
    res.status(201)
    res.json(addedMember)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// =============================================================================
// POST route: /api/v1/members/          (get information about a single member)
// Just after the log in
router.post('/getMemberProfileByAuthId', async (req, res) => {
  const auth0Id = req.body.auth0Id
  try {
    const member = await db.getMemberByAuthId(auth0Id)
    res.json(member === undefined ? {} : member)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
