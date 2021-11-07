const express = require('express')
const router = express.Router()

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

module.exports = router
