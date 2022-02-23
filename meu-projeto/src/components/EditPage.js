import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "./Container"
import Loading from "./Loading"
import styles from "./styles/project.module.css"
function EditPage(){
    let {id} = useParams()
    const [project,setProject] = useState([])
    const [showProjectForm,setShowProjectForm]= useState(false)
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

    return (
        <>
            {project.name?(
                <div className={styles.project_details}>
                    <Container customClass="column">
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
                                    <p>form</p>
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