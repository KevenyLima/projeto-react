const router =require("express").Router()

const Project = require('../models/project')

router.post('/',async(req,res)=>{
    const {name,budget,category,cost,services,id}=req.body
})