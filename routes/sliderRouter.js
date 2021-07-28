const router=require(`express`).Router()
const {createSlider,sliderUpdate,sliderDelete,getElementById}=require(`../controllers/sliderController`)



router.get('/add', (req,res)=>{
    res.render('edit-basket',{
        layout:'./layout'
    })
})
router.get('/all/:id', getElementById)
router.post('/add',createSlider);

router.patch('/edit/:id',sliderUpdate)
router.delete('/delete/:id', sliderDelete)

module.exports = router;
