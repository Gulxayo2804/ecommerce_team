const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name:{
        uz:{type:String, required:true},
        ru:{type:String, required:true},
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Category',categorySchema);