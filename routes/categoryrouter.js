const router=require(`express`).Router()
const {createCategory,categoryUpdate,categoryDelete,getElementById}=require(`../controllers/categoryController`)
const router = require('express').Router();


router.get('/add', (req,res)=>{
    res.render('edit-category',{
        layout:'./layout'
    })
})
router.get('/all/:id', getElementById)
router.post('/add',createCategory);

router.patch('/edit/:id',categoryUpdate)
router.delete('/delete/:id', categoryDelete)

module.exports = router;