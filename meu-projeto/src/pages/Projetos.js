import { useState , useEffect } from "react"
import { useLocation } from "react-router-dom"
import Message from "../components/Message"
function Projetos(){
    const  [projects,setProjects] =  useState([])
    const location = useLocation()
    let messages =''
    if(location.state){
        messages = location.state.message
        console.log(messages)
    }

     useEffect(async ()=>
     {
          try
          {
             const response = await fetch('http://localhost:5000/projects')
             const datas = await response.json()
             setProjects(datas)
             
         }
         catch(error){
             console.log(error)        
         }
     }   
,[])
    return (
        <div>
            <h1>Meus projetos</h1>
            {messages && <Message type="success" msg={messages}/>}
        </div>
            
            
        
    )
}
export default Projetos