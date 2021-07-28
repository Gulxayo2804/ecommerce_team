const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true, 
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String, 
        required:true
    },
    address:{String},

    isActive:{
        type:Boolean,
        default:false
    },
    uid:{
        type:String, 
        required:true, 
        unique:true},
    role:{
        type:String,
        role:{type:String, enum:['admin', 'user'], default:"user"},
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)