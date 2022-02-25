const mongoose= require('mongoose')
const Project=mongoose.model('project',{
    name:String,
    budget:Number,
    category:
        {
            id:Number,
            nome:String  
        }
    ,
    cost: Number,
    services: Array,
    id:Number 
})

module.exports = Project