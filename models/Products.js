/*
name,
CategoryID,
price,
color->[{

}],
description,
best_seller ->number -> default >0
delverTime->
image[]
*/

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
            type : String , required: true 
        } ,
    best_seller : 
        { 
            type : Number , default: 0, required: true 
        } ,
    delverTime :
    {
        type: Date, required:true
    },
    images: [
        {
          url: {
            type: String,
            required: true,
          },
        },
      ]
})

