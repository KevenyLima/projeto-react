import Select from "./select"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import {useState,useEffect} from "react"
function ProjectsForm({btnText,handleSubmit,projectData}){
    const [categories,setCategories] = useState([])
    const [project,setProject]=useState(projectData||{})
    useEffect(async()=>{
        try {
            const response = await fetch("http://localhost:5000/categories")
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
    }
    function handleChange(e){
        setProject({...project,[e.target.name]:e.target.value})
        console.log(project)
    }

    return (
        <form onSubmit={submit} >
            <Input handleOnChange={handleChange} type="text" text="nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input handleOnChange={handleChange} type="number" text="orçamento do projeto " name="budget" placeholder="Insira o valor do orçamento"/>
            <Select handleOnChange={handleChange} text="Selecione uma categoria" name="id_options" options={categories}/>
            <SubmitButton  text={btnText}/>
        </form>
    )
}
export default ProjectsForm