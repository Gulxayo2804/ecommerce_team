const Category = require('../models/Category');

exports.createCategory = async(req,res,next)=>{
    const category = new Category({
       name:{
           uz:req.body.nameuz,
           ru:req.body.nameru
       }
    })
    await category.save()
    .then(()=>{
        res.redirect('/category/all')
                  
    })
    .catch((error)=>{
        res.status(500).redirect('/category/add')
    })
}
exports.categoryUpdate=async (req,res,next)=>{
    const category=await Category.findByIdAndUpdate({_id:req.params.id})
        category.name.uz=req.body.nameuz,
        category.name.ru=req.body.nameru
    await category.save()
        .then(()=>{
            res.status(200).redirect(`/category/all`)
        })
        .catch((err)=>{
            res.status(200).redirect(`/category/all/${category._id}`)
        })
}


exports.categoryDelete=async(req,res,next)=>{
    await Category.findByIdAndDelete({_id:req.params.id})
    res.status(200).redirect(`/category/all`)
}

exports.getElementById= async (req,res,next)=>{
    const category= await Category.findById({_id:req.params.id})
    res.status(200).render('admin/category/update',{
        category,
        layout:'./admin_layout'
    })
}
exports.getAll= async (req,res,next)=>{
    const category= await Category.find()
    res.render('admin/category/index',{
        data:category,
        layout:'./admin_layout.ejs'
    })
}