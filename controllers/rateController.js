const Rating = require('../models/Rating')


exports.creatRating = async (req,res) =>{
    const alfa = new Rating({
        productID: req.body.productID,
        rating:req.body.rating
    })
    await alfa.save()
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        res.redirect('/')
    })
}

