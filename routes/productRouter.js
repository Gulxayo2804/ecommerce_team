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
const {isAdminAuth} = require('../middleware/auth')



const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/uploads');
    }, 
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});


const upload = multer({storage: storage});

router.post('/add', isAdminAuth, addProduct);
router.get('/all', isAdminAuth,getProduct);
router.get('/get/:id', isAdminAuth,getById);
router.put('/:id',isAdminAuth,updateProduct)


module.exports = router;
