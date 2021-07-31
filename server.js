const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const store = require('./config/db').store
const connectDB = require('./config/db').connectDB
const layout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const session = require('express-session')
const ejs = require('ejs')
const methodOverride = require('method-override')
const app = express()
connectDB()

app.use(
    session({
        secret: "this_is_session_secret_key_07565434546",
        saveUninitialized:false,
        resave:false,
        store:store,

        cookie:{
            httpOnly:true,
            maxAge:1000*60*60*24,
            sameSite:'strict'
        }
    })
)
app.use(express.static('public'))
app.use(express.static(path.join(__dirname + "public/admin")))
app.use(express.static(path.join(__dirname + "/public/client")))
app.use(bodyParser.json())
app.locals.moment = require("moment");
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method',{
    methods:['POST', 'GET']
}))

app.use(cookieParser())
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(layout);

app.get('/', (req,res)=>{
    const user = req.session.user
    res.render('client/index',{layout:'./client_layout',user})
})
app.get('/call', (req,res)=>{
    const user = req.session.user
    res.render('client/blurb-call-to-action',{layout:'./client_layout',user})
})
app.get('/404', (req,res)=>{
    const user = req.session.user
    res.render('client/404',{layout:'./client_layout',user})
})
app.get('/product', (req,res)=>{
    const user = req.session.user
    res.render('client/compare-products-single',{layout:'./client_layout',user})
})
app.get('/conditions', (req,res)=>{
    const user = req.session.user
    res.render('client/conditions',{layout:'./client_layout',user})
})
app.get('/coupon', (req,res)=>{
    const user = req.session.user
    res.render('client/coupon',{layout:'./client_layout',user})
})
app.get('/detail', (req,res)=>{
    const user = req.session.user
    res.render('client/product-details',{layout:'./client_layout',user})
})
app.get('/category', (req,res)=>{
    const user = req.session.user
    res.render('client/category',{layout:'./client_layout',user})
})

app.get('/wishlist', (req,res)=>{
    const user = req.session.user
    res.render('client/wishlist',{layout:'./client_layout',user})
})
app.get('/contact', (req,res)=>{
    const user = req.session.user
    res.render('client/contact-us',{layout:'./client_layout',user})
})

app.use('/admin', require('./routes/admin/index'))

app.use('/api/user', require('./routes/userRouter'));
app.use('/api/auth', require('./routes/authRouter'));
app.use(`/category`,require(`./routes/categoryrouter`));
app.use(`/slider`,require(`./routes/sliderRouter`));
app.use(`/basket`,require(`./routes/basketRouter`));
app.use(`/commit`,require(`./routes/commitRouter`))
app.use(`/product`,require(`./routes/productRouter`))


app.listen(PORT, ()=>{
    console.log('Server is running to localhost')
})
