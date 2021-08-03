const Chegirma = require('../models/Chegirma')


exports.createChegirma = async (req,res)=>{
    const result = new Chegirma({
        amount:req.body.amount,
        productID:req.body.productID
    })
    await result.save()
    .then(()=>{
        res.redirect('/chegirma/All')
    })
    .catch((err)=>{
        res.redirect('/cherma/Add')
    })
}

exports.getAll = async (req,res)=>{
    const all = await Chegirma.find()
    res.render('./admin/chegirma/index',{
        layout:'admin_layout',
        all
    })

}

exports.ChegirmaUpdate = async (req,res)=>{
    const up = await Chegirma.findByIdAndUpdate(req.params.id)
    up.productID = req.body.productID,
    up.amount = req.body.amount
    await up.save()
    .then(()=>{
        res.redirect('/chegirma/All')
    })
    .catch((err)=>{
        res.redirect('/chegirma/update')
    })
}

exports.ChegirmaDelete = async (req,res)=>{
    const del = await Chegirma.findByIdAndDelete(req.params.id)
    res.redirect('/chegirma/All')
}

exports.getElementById = async(req,res)=>{
    const result = await Chegirma.getElementById(req.params.id)
    res.json(result)
}