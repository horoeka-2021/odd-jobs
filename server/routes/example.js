const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('example', { message: 'example message for testing' })
})

module.exports = router
