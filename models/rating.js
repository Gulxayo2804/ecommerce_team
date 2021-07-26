const mongoose = require('mongoose');
const ratingSchema = mongoose.Schema({
    productID:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    rating:{
        type:String,
        enum:['1','2','3','4','5'],
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Rating', ratingSchema)