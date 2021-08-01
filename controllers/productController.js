const fs = require('fs');
const path = require('path')
const multer = require('multer')
const Product = require('../models/Products')
const Category = require('../models/Category');

exports.addProduct = async (req,res) => {
    let arr = []
    for (let item in req.files)
    {
        arr.push({
            urls:item
        })
    }
    const product = new Product({
        name: 
        {
            uz:req.body.nameuz,
            ru:req.body.nameru,
        },
        price: req.body.price,
        CategoryID : req.body.CategoryID,
        color : req.body.color,
        description: {
            uz: req.body.descriptionuz,
            ru: req.body.descriptionru,
        },
        delverTime:req.body.delverTime,
        images: arr
    }) ;
    await product.save()
    .then(()=>{
            res.redirect('product/all')
        
    })
    .catch((err)=>{
        res.status(500).redirect(`/product/add`)
    })
}

exports.getProduct = async (req,res, next) => {
    const product = await Product.find()
     const category  = await Category.find()
    .populate(['CategoryID'])
        res.render('./admin/product/index', {
            layout:'./admin_layout',
            product , category 
            
        })
        
}

exports.getByUserCategoryIDProduct=async (req,res)=>{
    const product= await Product.find({CategoryID: req.params.id})
    .populate(['CategoryID'])
     .sort({date:-1})
     .then(()=>{
        res.render("./client/category", {title: "Hamroh", 
        layout: "./client", 
        data: product })
        
         })
}

exports.getById=async (req,res)=>{
    const product = await Product.findById({_id: req.params.id})
    .then(()=>{
        res.render('./admin/product/update', {
            layout: "./admin_layout", 
            product
        })
        
         })
}

exports.updateProduct = async(req, res) => {

    const product = await Product.findByIdAndUpdate({_id: req.params.id})
    product.price = req.body.price
    product.name.ru=req.body.nameru
    product.name.uz=req.body.nameuz
    product.color=req.body.color
    product.categoryID= req.body.categoryID
    product.description.uz=req.body.descriptionuz
    product.description.ru=req.body.descriptionru
    product.save({validateBeforeSave:false})
    await product.save()
    .then(()=>{
        res.redirect('/product/all')
    })
    .catch((err)=>{
        res.status(400).json({message: "Badly", data: error})
    })
}