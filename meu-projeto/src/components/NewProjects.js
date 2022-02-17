import {useState,useEffect} from 'react'
import ProjectsForm from "./Projectsform"
import styles from "./styles/newProjects.module.css"
function  NewProjects(){
    const [categories,setCategories] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/categories',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            setCategories(data)
        }).catch((error)=>console.log(error))
            
        },[])
    return (
        <div className={styles.newProjects_container}>
            <h1>Criar Projeto</h1>
            <p>Criar seu projeto para depois adicionaros serviços </p>
            <ProjectsForm btnText="Criar projeto"categoriesProps={categories}/>
        </div>
       
    )
}
export default NewProjects