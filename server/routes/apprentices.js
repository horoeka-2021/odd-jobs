const express = require('express')
const router = express.Router()

const db = require('../db/db')
module.exports = router

// UTILITY =====================================================================
// GET route: /api/v1/apprentices/               (get a list of all apprentices)
router.get('/', async (req, res) => {
  try {
    const apprentices = await db.getAllApprentices()
    res.status(200)
    res.json(apprentices)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// =============================================================================
// GET route: /api/v1/apprentices/3              (get a single apprentice by id)
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const apprentice = await db.getApprenticeByUserId(userId)
    const locations = await db.getApprenticeLocations(userId)
    apprentice.locations = locations
    res.json(apprentice)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// =============================================================================
