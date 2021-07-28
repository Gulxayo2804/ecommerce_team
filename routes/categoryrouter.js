const router=require(`express`).Router()
const {createCategory,categoryUpdate,categoryDelete,getAll}=require(`../controllers/categoryController`)



router.get('/add', (req,res)=>{
    res.render('edit-category',{
        layout:'./layout'
    })
})
router.get('/all', getAll)
router.post('/add',createCategory);

router.patch('/edit/:id',categoryUpdate)
router.delete('/delete/:id', categoryDelete)

module.exports = router;