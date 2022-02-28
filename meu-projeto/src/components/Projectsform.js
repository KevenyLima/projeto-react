import Select from "./select"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import {useState,useEffect} from "react"
function ProjectsForm({btnText,handleSubmit,projectData}){
    const [categories,setCategories] = useState([])
    const [project,setProject]=useState(projectData||{})
    useEffect(async()=>{
        try {
            const response = await fetch("http://localhost:5000/category",{
                method:"get",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await response.json()
            setCategories(data)
            console.log(categories)
        } catch (error) {
            console.log(error)
        }
        
    },[])
    const submit=(e)=>{
        e.preventDefault()
        handleSubmit(project)
        console.log(project)
    }
    function handleChange(e){
        setProject({...project,[e.target.name]:e.target.value})
    }
    function handleCategory(e){
        setProject({
            ...project,
            category:{
                id:e.target.value,
                name:e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form onSubmit={submit} >
            <Input handleOnChange={handleChange} value={project.name ? project.name:''} type="text" text="nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input handleOnChange={handleChange} value={project.budget?  project.budget:''} type="number" text="orçamento do projeto " name="budget" placeholder="Insira o valor do orçamento"/>
            <Select handleOnChande={handleCategory} value={project.category? project.category.id:''} text="Selecione uma categoria" name="id_options" options={categories}/>
            <SubmitButton  text={btnText}/>
        </form>
    )
}
export default ProjectsForm