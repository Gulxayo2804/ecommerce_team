/*
productID,
userID,
message
*/
const mongoose = require('mongoose');
const commitSchema = mongoose.Schema({
    

    productID:{
        type: mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    userID:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


module.exports = mongoose.model('Commit',commitSchema);