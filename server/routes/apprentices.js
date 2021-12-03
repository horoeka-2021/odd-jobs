const express = require('express')
const router = express.Router()

const db = require('../db/db')
module.exports = router

/* GET users listing. */
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
