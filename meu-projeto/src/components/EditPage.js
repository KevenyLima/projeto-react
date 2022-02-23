import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "./Container"
import Loading from "./Loading"
import ProjectsForm from "./Projectsform"
import styles from "./styles/project.module.css"
import Message from "./Message"
function EditPage(){
    let {id} = useParams()
    const [project,setProject] = useState([])
    const [showProjectForm,setShowProjectForm]= useState(false)
    const [message,setMessage]= useState('')
    const [type,setType]= useState('')
    useEffect(() => {
        setTimeout(
          () =>
            fetch(`http://localhost:5000/projects/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then((resp) => resp.json())
              .then((data) => {
                setProject(data)
              }),200)
      }, [id])
      function toggleProjectForm(){
          setShowProjectForm(!showProjectForm)
      }
      function editPost(project){
        if(project.budget<project.cost){
            setMessage("O orcamento não pode ser menor que custo do projeto!")
            setType("error")
            return false
        }
        
          fetch(`http://localhost:5000/projects/${project.id}`,{
              method:"patch",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(project)
          }).then((response)=>response.json())
          .then((data)=>{
              setProject(data)
              setShowProjectForm(false)
                setMessage("projeto atualizado com sucesso")
                setType('success')
          }).catch((error)=>console.log(error))
      }

    return (
        <>
            {project.name?(
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message&&<Message type={type} msg={message}/>}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm?"Editar Projeto":"Fechar"}</button>
                            {!showProjectForm?(
                                <div className={styles.project_info}>
                                    <p><span>Categoria:</span>{project.category.name}</p>
                                    <p>
                                        <span>Total de Orçamento:</span>
                                        R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span>
                                        {project.cost}
                                    </p>
                                </div>
                            ):(
                                <div className={styles.project_info}>
                                    <ProjectsForm btnText="Salvar" projectData={project} handleSubmit={editPost}/>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ):(<Loading/>)}
        </>
    )
}

export default EditPage