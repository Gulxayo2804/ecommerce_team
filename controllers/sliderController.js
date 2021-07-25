const Slider=require(`../models/Slider`)
exports.createSlider=async(req,res,next)=>{
    const slider=new Slider({
        images:req.body.images
    })
    await slider.save()
    .then(() => {
        res.redirect(`/admin`)
    }).catch((err) => {
        res.status(500).redirect(`/slider/add`)
    });
}