const express = require('express')
const router = express.Router()
const f = require('../controllers/FAQcontroller')

router.post('add',f.createFAQ)
router.get('all',f.getAll)

module.exports = router;