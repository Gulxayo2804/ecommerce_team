const Slider=require(`../models/Slider`)
exports.createSlider=async(req,res,next)=>{
    const slider=new Slider({
        images:req.body.images
    })
    await slider.save()
    .then(() => {
        res.redirect(`slider/all`)
    }).catch((err) => {
        res.status(500).redirect(`/slider/add`)
    });
}
exports.getAll= async (req,res,next)=>{
    const slider= await Slider.find()
    res.render('admin/slider/index',{
        data:slider,
        layout:'./admin_layout.ejs'
    })
}
exports.sliderUpdate=async (req,res,next)=>{
    const slider=await Slider.findByIdAndUpdate({_id:req.params.id})
        slider.images=req.body.images
    await slider.save()
        .then(()=>{
            res.status(200).redirect(`/slider/all`)
        })
        .catch((err)=>{
            res.status(200).redirect(`/slider/all/${Slider._id}`)
        })
}
exports.sliderDelete=async(req,res,next)=>{
    await Slider.findByIdAndDelete({_id:req.params.id})
    res.status(200).redirect(`/slider/all`)
}
exports.getElementById= async (req,res,next)=>{
    const slider= await Category.findById({_id:req.params.id})
    res.status(200).render('admin/slider/update',{
        data:slider,
        layout:'./admin_layout'
    })
}