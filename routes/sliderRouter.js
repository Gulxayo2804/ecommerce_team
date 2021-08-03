const router=require(`express`).Router()
const {createSlider,sliderUpdate,sliderDelete,getElementById}=require(`../controllers/sliderController`)
const {isAdminAuth} = require('../middleware/auth')


router.get('/add',isAdminAuth, (req,res)=>{
    res.render('edit-basket',{
        layout:'./layout'
    })
})
router.get('/all/:id',isAdminAuth, getElementById)
router.post('/add',createSlider);

router.patch('/edit/:id',isAdminAuth,sliderUpdate)
router.delete('/delete/:id',isAdminAuth, sliderDelete)

module.exports = router;
