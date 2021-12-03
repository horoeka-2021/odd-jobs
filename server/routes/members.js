const express = require('express')
const router = express.Router()

const db = require('../db/db')

// API endpoint example
router.get('/', async (req, res) => {
  const auth0Id = req.body.auth0Id
  try {
    const member = await db.getMemberByAuthId(auth0Id)
    res.json(member)
  } catch (error) {
      console.error(error)
      res.status(500).json({ error: error.message })
    }
})

router.put('/:user_id/edit', async (req, res) => {
  const userId = req.params.user_id
  const { name, email, phone, locationId, birthDate} = req.body
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
    console.log('updatedMember: ', updatedMember)
    res.sendStatus(200)
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