const router=require(`express`).Router()
const {createCategory,categoryUpdate,categoryDelete,getAll,getElementById}=require(`../controllers/categoryController`)
const {isAdminAuth} = require('../middleware/auth')


router.get('/add',isAdminAuth, (req,res)=>{
    res.render('edit-category',{
        layout:'./layout'
    })
})
router.get('/all/:id',isAdminAuth, getElementById)
router.post('/add',isAdminAuth,createCategory);
router.get('/all',isAdminAuth, getAll)
router.patch('/edit/:id',isAdminAuth,categoryUpdate)
router.delete('/delete/:id', isAdminAuth,categoryDelete)

module.exports = router;