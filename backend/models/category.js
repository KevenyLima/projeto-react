const  mongoose  = require("mongoose")

const Category =mongoose.model('category',{
    name:String
})

module.exports = Category