const mongoose = require ('mongoose')
const productSchema = new  mongoose.Schema({
    name : 
        {
            uz: { type : String , required: true } ,
            ru: { type : String , required: true } ,
        } ,
    CategoryID: 
        { 
            type : mongoose.Schema.ObjectId , ref : "Category",required: true  
        } ,
    price : 
        { 
            type : Number , required: true 
        } ,
    color :
        [{
            type : String , required: true
        }] ,
    description : 
        {
            uz: { type : String , required: true } ,
            ru: { type : String , required: true } ,
        },
    best_seller : 
        { 
            type : Number , default: 0
        } ,
    delverTime :
    {
        type: String, required:true
    },
    images: 
        [
            {
                urls: { type: String, required: true, },
            }
       ]
})
module.exports = mongoose.model("Product", productSchema );

