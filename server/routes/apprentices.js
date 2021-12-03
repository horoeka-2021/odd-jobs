const express = require('express')
const router = express.Router()

const db = require('../db/db')
module.exports = router

// ================================================================
// GET route: /api/v1/apprentices/  (get a list of all apprentices)
router.get('/', (req, res, next) => {
  db.getAllApprentices()
    .then(apprentices => {
      res.status(200)
      return res.json(apprentices)
    })
    .catch(err => {
      res.status(500)
      return res.json({
        message: 'Error getting all apprentices',
        error: err
      })
    })
})

// ================================================================
// GET route: /api/v1/apprentices/3
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const apprentice = await db.getApprenticeByUserId(userId)
    const locations = await db.getApprenticeLocations(userId)
    apprentice.locations = locations
    res.json(apprentice)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

// ================================================================
