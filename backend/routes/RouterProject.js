const router =require("express").Router()

const Project = require('../models/project')
//create
router.post('/',async(req,res)=>{
    const {name,budget,category,cost,services,id}=req.body
    if(!name&&!budget&&!category&&!cost&&!services&&!id){
        res.status(422).json({error:"preencha todos os campos"})
        return
    }

    const project={
        name,
        budget,
        category,
        cost,
        services,
        id
    }

    try {
        await Project.create(project)
        res.status(201).json({message:"projeto criado com sucesso"})
    } catch (error) {
        res.status(500).json({"error":error})
    }

})
//read
router.get('/',async(req,res)=>{
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})
router.get("/:id",async(req,res)=>{
    const id = req.params.id

    try {
        
        const project = await Project.findOne({_id:id})
        if(!project){
            res.status(422).json({message:'o usuario nao foi encontrado'})
            return
        }
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({'error':error})
    }

}) 
router.patch('/:id', async(req,res)=>{
    const id = req.params.id
    const {name,budget,category,cost,services,project_id} =req.body
    const project ={
        name,budget,category,cost,services,project_id
    }
    try {
        const updateProject =await Project.updateOne({_id:id},project)
        console.log(updateProject)
        if(updateProject.matchedCount===0){
           res.status(422).json({message:'o usuario nao foi encontrado'})
            return 
        }
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({'error':error})
    }

})
router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const project = await Project.findOne({_id:id})
    if(!project){
        res.status(422).json({message:'o usuario nao foi encontrado!'})
        return
    }
    try {
        await Project.deleteOne({_id:id})
        res.status(200).json({message:"projeto deletado com sucesso"})
    } catch (error) {
        res.status(500).json({'error':error})
    }
    
})

module.exports =router
