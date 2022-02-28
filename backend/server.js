const express = require("express")
const app = express()
const cors = require("cors")
const mongoose= require("mongoose")
const projectRoutes = require("./routes/RouterProject")
const categoryRoutes = require('./routes/RouterCategories')
require('dotenv').config()
/*app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','get,post,delete,put,patch')
    app.use(cors())
    next()
})*/
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const USER = process.env.DB_USER
const SENHA =encodeURIComponent(process.env.DB_PASSWORD)

app.use('/project',projectRoutes)
app.use('/category',categoryRoutes)
mongoose.connect(`mongodb+srv://${USER}:${SENHA}@cluster0.qnwtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(()=>{
    console.log('conectado ao mongodb')
    app.listen(5000)
}).catch(error=>console.log(error))