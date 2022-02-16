import ButtonSubmit from "./ButtonSubmit"
import {useState,useEffect} from 'react'
function  NewProjects(){
    const [categories,setCategories] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/categories',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setCategories(data)
            console.log(data)
        }).catch((error)=>console.log(error))
            
        },[])
    return (
        <form method="get">
            <h1>Criar Projeto</h1>
            <p>Criar seu projeto para depois adicionaros serviços </p>
            <h2>Nome do projeto:</h2>
            <input type="text" id='' />
            <h2>Orçamento do projeto:</h2>
            <input type="text"/>
            <h2>Selecione a categoria:</h2>
            <select name="select">
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <ButtonSubmit to="/" text="criar projeto"/>
        </form>
    )
}
export default NewProjects