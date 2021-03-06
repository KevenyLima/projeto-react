import { useNavigate } from "react-router-dom"
import ProjectsForm from "./Projectsform"
import styles from "./styles/newProjects.module.css"
function NewProjects() {
    const navigate = useNavigate()
    function createPost(project) {
        project.cost = 0
        project.servies = []
        fetch("http://localhost:5000/project", {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(project)
        }).then(resp => resp.json()).then(() => {
            navigate('/projetos', { message: 'projeto criado com sucesso' })
        })
            .catch(error => console.log(error))
    }
    return (
        <div className={styles.newProjects_container}>
            <h1>Criar Projeto</h1>
            <p>Criar seu projeto para depois adicionaros serviços </p>
            <ProjectsForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>

    )
}
export default NewProjects