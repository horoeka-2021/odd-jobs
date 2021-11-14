const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', function (req, res, next) {
  res.render('example')
})

router.get('/param/:param', function (req, res, next) {
  const param = req.params.param
  res.render('example', { message: 'example message for testing', param: param })
})

router.get('/query', function (req, res, next) {
  const queryValue = req.query.key
  res.render('example', { message: 'key', param: queryValue })
})

router.post('/posttest', function (req, res, next) {
  const { userId, content } = req.body

  res.render('example', { message: `Hello from userID:${userId}`, param: `The content:${content}` })
})

router.get('/data/', async (req, res) => {
  try {
    const examples = await db.getExamples()
    res.json(examples)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
