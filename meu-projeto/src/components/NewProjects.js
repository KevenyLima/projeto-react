import {useHistory} from "react-router-dom"
import ProjectsForm from "./Projectsform"
import styles from "./styles/newProjects.module.css"
function  NewProjects(){
    const history = useHistory()
    function createPost(project){
        project.cost = 0
        project.servies=[]
        fetch("http://localhost:5000/projects",{
            method: 'post',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(project)
        }).then(resp=>resp.json())
        .then(data=>console.log(data))
    }
    return (
        <div className={styles.newProjects_container}>
            <h1>Criar Projeto</h1>
            <p>Criar seu projeto para depois adicionaros serviços </p>
            <ProjectsForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
       
    )
}
export default NewProjects