const  mongoose  = require("mongoose")

const Category =mongoose.model('category',{
    id:Number,
    name:String
})

module.exports = Category