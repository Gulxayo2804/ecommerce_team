/*
 image
*/
const mongoose = require ('mongoose')
const sliderSchema = new  mongoose.Schema({
    images: {
          type: String,
          required: true
      }
},
{
    timestamps:true
})
module.exports = mongoose.model('Slider', sliderSchema );

