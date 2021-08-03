const express = require('express')
const router = express.Router()
const contraoller = require('../controllers/rateController')

router.post('/create',contraoller.creatRating)

module.exports = router