const mongoose = require('mongoose');
const chegirmaSchema = mongoose.Schema({
    amount:{
        type:String,
        required:true
    },
    productID:{
        type: mongoose.Schema.ObjectId,
        ref:'Product',
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Chegirma',chegirmaSchema);
