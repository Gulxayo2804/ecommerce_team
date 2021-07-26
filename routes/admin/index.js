const express = require('express');
const router = express.Router()
const admin = require('../../controllers/admin/index')


router.get('/dashboard', admin.dashboard)
router.get('/login', admin.login)

module.exports = router