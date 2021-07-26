const mongoose = require('mongoose')

const basketSchema = new mongoose.Schema({
    prodeuctID:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    userID:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Basket', basketSchema)
