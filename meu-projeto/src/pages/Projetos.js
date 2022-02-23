import { useState , useEffect } from "react"
import { useLocation } from "react-router-dom"
import Button from "../components/Button"
import Container from "../components/Container"
import Message from "../components/Message"
import ProjectCard from "../components/ProjectCard"
import styles from "../components/styles/projects.module.css"
import Loading from "../components/Loading"
function Projetos(){
    const  [projects,setProjects] =  useState([])
    const location = useLocation()
    const [removeLoading,setRemoveLoading]=useState(false)

    let messages =''
    if(location.state){
        messages = location.state.message
        console.log(messages)
    }

     useEffect(async ()=>
     {
         setTimeout(() => {
            fetch('http://localhost:5000/projects',{
                method:'get',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=>response.json()).then((data)=>{
                setProjects(data)
                setRemoveLoading(true)
            }).catch((error)=>console.log(error))
         }, 300)
     }   
,[])
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <Button to="/newProjects" text="Criar projeto"/>
            </div>
            {messages && <Message type="success" msg={messages}/>}
            <Container customClass="start">
                {projects.length > 0 &&projects.map((project)=>(
                    <ProjectCard 
                    id={project.id} 
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}/>
                ))}
                {!removeLoading&&<Loading/>}
                {removeLoading && projects.length===0&&(
                    <p>Não há prjetos cadastrados!</p>
                )}
              
            </Container >
        </div>
            
            
        
    )
}
export default Projetos