const express = require('express');
const router = express.Router()
const admin = require('../../controllers/admin/index')
const {isAdminAuth} = require('../../middleware/auth')

router.get('/dashboard',isAdminAuth, admin.dashboard)

module.exports = router