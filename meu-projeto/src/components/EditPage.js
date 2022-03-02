import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "./Container"
import Loading from "./Loading"
import ProjectsForm from "./Projectsform"
import styles from "./styles/project.module.css"
import Message from "./Message"
import ServiceForm from "./ServiceForm"
import{parse,v4 as uuidv4} from "uuid"
function EditPage(){
    let {id} = useParams()
    const [project,setProject] = useState([])
    const [showProjectForm,setShowProjectForm]= useState(false)
    const [showServiceForm,setShowServiceForm] = useState(false)
    const [message,setMessage]= useState('')
    const [type,setType]= useState('')
    useEffect(() => {
            fetch(`http://localhost:5000/project/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then((resp) => resp.json())
              .then((data) => {
                setProject(data)
              })
      }, [id])
      function toggleProjectForm(){
          setShowProjectForm(!showProjectForm)
      }
      function toggleServiceForm(){
          setShowServiceForm(!showServiceForm)
      }
      function editPost(project){
          setMessage('')
        if(project.budget<project.cost){
            setMessage("O orcamento não pode ser menor que custo do projeto!")
            setType("error")
            return false
        }
        
          fetch(`http://localhost:5000/project/${project._id}`,{
              method:"put",
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
      function createService(project){
        setMessage('')
        const lastService = project.services[project.services.length-1]  
        lastService.id = uuidv4()
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) +parseFloat(lastServiceCost)
        if(newCost>parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }
        project.cost = newCost

        fetch(`http://localhost:5000/project/${project._id}`,{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(project)
        }).then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch(error=>console.log(error))
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

                        {/* -----------------------------------parte-dos-serviços---------------------------------- */} 
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm?'Adicionar serviço':'Fechar'}</button>
                            <div className={styles.project_info}>
                                {showServiceForm&&(
                                    <ServiceForm
                                    handleSubmit={createService}
                                    btnText="Adicionar Serviço"
                                    projectData={project}/>
                                )}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            <p>itens de serviços</p>
                        </Container>

                    </Container>
                </div>
            ):(<Loading/>)}
        </>
    )
}

export default EditPage