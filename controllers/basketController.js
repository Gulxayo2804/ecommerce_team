const Basket =require(`../models/Basket`)
exports.createBasket=async(req,res,next)=>{
    const basket=new Basket({
        prodeuctID:req.body.prodeuctID,
        userID:req.body.userID
    })
    await basket.save()
    .then(() => {
        res.status(201).json({
            success:true,
            data:basket
        })
    }).catch((err) => {
        res.status(500).json({
            success:false,
            data:err
        })
    });
}
exports.updateBasket=async(req,res,next)=>{
    const basket=new Basket.findByIdUpdate(req.params.id)
    basket.prodeuctID=req.body.prodeuctID,
    basket.userID=req.body.userID
    basket.save({validateBeforeSave:false})
    await basket.save()
    .then(() => {
        res.status(200).json({
            success:true,
            data:basket

        })
    }).catch((err) => {
        res.status(500).json({
            success:false,
            data:err
        })
    });
}
exports.basketDelete=async(req,res,next)=>{
    await Basket.findByIdAndDelete({_id:req.params.id})
    res.status(200).redirect(`/basket/all`)
}
exports.getElementById= async (req,res,next)=>{
    const basket= await Basket.findById({_id:req.params.id})
    res.status(200).render('edit-basket',{
        data:basket,
        layout:'./layout'
    })
}