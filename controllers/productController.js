const fs = require('fs');
const path = require('path')
const multer = require('multer')
exports.addProduct = async (req,res) => {
    const product = new Product({
        name: 
        {
            uz:req.body.nameuz,
            ru:req.body.nameru
        },
        price: req.body.price,
        CategoryID : req.body.CategoryID,
        color : req.body.color,
        description: {
            uz: req.body.desciriptionuz,
            ru: req.body.desciriptionru,
        },
        images: urls
    }) ;
    await product.save()
    .then(()=>{
        res.status(201).json({
            success: true,
        product : product
        })
        
    })
    .catch((err)=>{
        res.status(400).json({
            success:false,
            data:err
        })
    })
}

exports.getProduct = async (req,res) => {
    const product = await Product.find()
    const category  = await Category.find()
    .populate(['categoryID'])
     .sort({date:-1})
     .then(()=>{
        res.status(200).json({
            success: true,
        product : product
        })
        
    })
}

exports.getByUserCategoryIDProduct=async (req,res)=>{
    const product= await Product.find({categoryID: req.params.id})
    .populate(['categoryID'])
     .sort({date:-1})
     .then(()=>{
        res.status(200).json({
            success: true,
        product : product
        })
        
         })
}

exports.getById=async (req,res)=>{
    const product = await Product.findById(req.params.id)
    .then(()=>{
        res.status(200).json({
            success: true,
        product : product
        })
        
         })
}

exports.updateProduct = async(req, res) => {

    const product = await Product.findByIdAndUpdate(req.params.id)
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
        res.status(200).json({
            success: true,
        product : product
        })
        
         })
}