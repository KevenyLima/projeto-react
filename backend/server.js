const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({messagem:"exemplo"})
}) 

app.listen(5080,()=>{console.log("esta rodando")})