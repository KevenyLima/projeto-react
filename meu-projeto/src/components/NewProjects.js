import {useState,useEffect} from 'react'
import ProjectsForm from "./Projectsform"
import styles from "./styles/newProjects.module.css"
function  NewProjects(){
    return (
        <div className={styles.newProjects_container}>
            <h1>Criar Projeto</h1>
            <p>Criar seu projeto para depois adicionaros serviços </p>
            <ProjectsForm btnText="Criar projeto"/>
        </div>
       
    )
}
export default NewProjects