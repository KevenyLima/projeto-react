const mongoose= require('mongoose')
const Project=mongoose.model('project',{
    name:String,
    budget:Number,
    category:
        {
            id:String,
            name:String  
        }
    ,
    cost: Number,
    services: Array
})

module.exports = Project