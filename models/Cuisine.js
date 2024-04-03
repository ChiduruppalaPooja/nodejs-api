const mongoose = require('mongoose')

const cuisineSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
       
    }
    
})

module.exports = mongoose.model('Cuisine',cuisineSchema)