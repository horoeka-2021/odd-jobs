const express = require('express')
const router = express.Router()

const db = require('../db/db')

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

// ======================================================================
// POST route: /api/v1/users/signup            (creates a new user)
router.post('/signup', function (req, res) {
  console.log('backend', req.body)
  const { name, email, phone, birthDate, genderId } = req.body
  const member = {
    name: name,
    email: email,
    phone: phone,
    birth_date: birthDate,
    gender_id: genderId
  }
  db.addNewMember(member)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((error) => console.error(error))
})

module.exports = router
