const router=require(`express`).Router()
const {createBasket,updateBasket,basketDelete,getElementById}=require(`../controllers/basketController`)
router.get('/add', (req,res)=>{
    res.render('edit-basket',{
        layout:'./layout'
    })
})
router.get('/all/:id', getElementById)
router.post('/add',createBasket);

router.patch('/edit/:id',updateBasket)
router.delete('/delete/:id', basketDelete)

module.exports = router;