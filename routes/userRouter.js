const router = require('express').Router()
const {register, login,getOne,deleteUser, getAll, updateOne, logout} = require('../controllers/userController')

router.post('/register', register)
router.post('/login', login)
router.get('/all',getAll)
router.get('/logout', logout)
router.get('/getme', getOne)
router.put('/update/:id', updateOne)
router.delete('/delete/:id', deleteUser)
module.exports = router