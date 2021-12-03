const express = require('express')
const router = express.Router()

const db = require('../db/db')

// API endpoint example
router.post('/', async (req, res) => {
  console.log(req.body)
  const auth0Id = req.body.auth0Id
  console.log('auth0Id', auth0Id)
  try {
    const member = await db.getMember(auth0Id)
    res.json(member)
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
