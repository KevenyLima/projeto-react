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
    const [projectMessage,setProjectMessage]= useState('')

    let messages =''
    if(location.state){
        messages = location.state.message
    }

     useEffect(()=>
     {
        fetch('http://localhost:5000/project',{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>response.json()).then((data)=>{
            setProjects(data)
            setRemoveLoading(true)
        }).catch((error)=>console.log(error))
     }   
,[])

function RemoveProject(id){
    fetch(`http://localhost:5000/project/${id}`,{
        method:"delete",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response)=>response.json())
    .then((data)=>{
        setProjects(projects.filter((project)=>project._id !== id))
        setProjectMessage('Projeto removido com sucesso!')
    })
    .catch((error)=>console.log(error))
}
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <Button to="/newProjects" text="Criar projeto"/>
            </div>
            {messages && <Message type="success" msg={messages}/>}
            {projectMessage && <Message type="success" msg={projectMessage}/>}
            <Container customClass="start">
                {projects.length > 0 &&projects.map((project)=>(
                    <ProjectCard 
                    id={project._id} 
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project._id}
                    handleRemove={RemoveProject}
                    />
                ))}
                {!removeLoading&&<Loading/>}
                {removeLoading && projects.length===0&&(
                    <p>Não há projetos cadastrados!</p>
                )}
              
            </Container >
        </div>
            
            
        
    )
}
export default Projetos