const router = require('express').Router()
const md5 = require('md5')
const multer = require('multer');
const {
    addProduct,
    getById,
    getProduct,
    updateProduct
    } = require('../controllers/productController');
const path = require('path')



const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/uploads');
    }, 
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});


const upload = multer({storage: storage});

router.post('/add',  addProduct);
router.get('/all', getProduct);
router.get('/get/:id', getById);
router.put('/:id',updateProduct)


module.exports = router;
