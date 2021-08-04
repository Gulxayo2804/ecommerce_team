const FAQ = require('../models/FAQ')

exports.createFAQ = async(req,res)=>{
    const faq = new FAQ({
        title:{
            uz:req.body.titleuz,
            ru:req.body.titleru
        },
        description:{
            uz:req.body.descriptionuz,
            ru:req.body.descriptionru
        }
    })
    await faq.save()
    .then(()=>{
        res.redirect('/FAQ/All')
    })
    .catch((error)=>{
        res.status(500).redirect('/FAQ/Add')
    })
}

exports.getAll = async (req,res)=>{
    const allfaqs = await FAQ.find()
    res.render('./admin/FAQ/index')
    layout:'admin_layout',
    all
}