
/*
 name:{
     uz:{type:String, required:true},
     ru:{type:String, required:true},
 }
*/
const mongoose = require ('mongoose')
const categorySchema=new mongoose.Schema({
    name:{
        uz:{type:String, required:true},
        ru:{type:String, required:true}}
},{

    timestamps:true 
})
module.exports = mongoose.model('Category', categorySchema );


