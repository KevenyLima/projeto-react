import { useState , useEffect } from "react"
function Projetos(){
    const  [projects,setProjects] =  useState([])

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
        <>
            <div>
                {projects.map((project)=>(
                    <div>{project.projeto}</div>
                ))}
            </div>
           
        </>
        
    )
}
export default Projetos