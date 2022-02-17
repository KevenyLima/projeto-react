import Select from "./select"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import {useState,useEffect} from "react"
function ProjectsForm({btnText}){
    const [categories,setCategories] = useState([])
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
    return (
        <form method="GET">
            <Input type="text" text="nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="orçamento do projeto " name="budget" placeholder="Insira o valor do orçamento"/>
            <Select text="Selecione uma categoria" name="id_options" options={categories}/>
            <SubmitButton  text={btnText}/>
        </form>
    )
}
export default ProjectsForm