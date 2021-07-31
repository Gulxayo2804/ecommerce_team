const router=require(`express`).Router()
const {createSlider,sliderUpdate,sliderDelete,getElementById,getAll}=require(`../controllers/sliderController`)




router.get('/all/:id', getElementById)
router.post('/add',createSlider);
router.patch('/edit/:id',sliderUpdate)
router.delete('/delete/:id', sliderDelete)
router.get("/all",getAll)

module.exports = router;
