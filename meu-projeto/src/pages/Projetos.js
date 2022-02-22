import { useState , useEffect } from "react"
import { useLocation } from "react-router-dom"
import Button from "../components/Button"
import Container from "../components/Container"
import Message from "../components/Message"
import styles from "../components/styles/projects.module.css"
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
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <Button to="/newProjects" text="Criar projeto"/>
            </div>
            {messages && <Message type="success" msg={messages}/>}
            <Container customClass="start">
            </Container>
        </div>
            
            
        
    )
}
export default Projetos