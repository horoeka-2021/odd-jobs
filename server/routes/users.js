const express = require('express')
const router = express.Router()

const db = require('../db/db')

// check if the user exists
router.post('/getUserByAuthID', async (req, res) => {
  const auth0Id = req.body.auth0Id
  try {
    const member = await db.getUser(auth0Id)
    res.json(member)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

// UTILITY ==============================================================
// GET route: /api/v1/users/             (gets a list of ALL users)
router.get('/', (req, res) => {
  db.getAllUsers()
    .then(users => {
      res.status(200)
      return res.json(users)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
