const router = require("express").Router()
const Category = require('../models/category')

router.get('/',async(req,res)=>{
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})
router.post('/',async(req,res)=>{
    const { id ,name }=req.body
    const category ={
        id,
        name
    }
    if(!id&&!name){
        res.status(400).json({message:'preencha todos os campos'})
        return
    }

    try {
        await Category.create(category)
        res.status(201).json({message:'categoria criada com sucesso'})
    } catch (error) {
        res.status(500).json({'error':error})
    }
})

module.exports =  router