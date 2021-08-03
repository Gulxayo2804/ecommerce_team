const router = require('express').Router()
const {super_admin, login,getOne,elementDelete, userLogin,updateOne, logout} = require('../controllers/authController')
const {isAdminAuth} = require('../middleware/auth')
router.post('/create',isAdminAuth, super_admin)
router.post('/login', login)
router.get('/login', userLogin)
router.get('/logout',isAdminAuth, logout)
router.get('/getme/:id',isAdminAuth, getOne)
router.put('/:id', isAdminAuth,updateOne)
router.delete('/:id',isAdminAuth,elementDelete)

module.exports = router