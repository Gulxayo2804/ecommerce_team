const mongoose = require ('mongoose')
const productSchema = new  mongoose.Schema({
    name : 
        {
            uz: { type : String , required: true } ,
            ru: { type : String , required: true } ,
        } ,
    CategoryID: 
        { 
            type : mongoose.Schema.Object.ID , ref : "Catgeory",required: true  
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
                url: { type: String, required: true, },
            }
       ]
})
module.exports = mongoose.model('productSchema', productSchema );

