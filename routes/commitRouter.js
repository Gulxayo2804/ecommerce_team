const router=require(`express`).Router()
const {createCommit,getById,updateCommit,commitDelete}=require(`../controllers/commitController`)
router.get('/add', (req,res)=>{
    res.render('edit-commit',{
        layout:'./layout'
    })
})
router.get('/all/:id', getById)
router.post('/add',createCommit);

router.patch('/edit/:id',updateCommit)
router.delete('/delete/:id', commitDelete)

module.exports = router;
