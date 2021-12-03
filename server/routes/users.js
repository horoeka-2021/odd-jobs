const express = require('express')
const router = express.Router()

const db = require('../db/db')

/* GET users listing. */
router.post('/', function (req, res) {
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
    .catch ((error) => console.error(error))
})

module.exports = router
