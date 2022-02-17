import Select from "./select"
import Input from "./Input"
import SubmitButton from "./SubmitButton"
function ProjectsForm({categoriesPros,btnText}){
    return (
        <form method="GET">
            <Input type="text" text="nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="orçamento do projeto " name="budget" placeholder="Insira o valor do orçamento"/>
            <Select text="Selecione uma categoria" name="id_options" options={categoriesPros}/>
            <SubmitButton  text={btnText}/>
        </form>
    )
}
export default ProjectsForm