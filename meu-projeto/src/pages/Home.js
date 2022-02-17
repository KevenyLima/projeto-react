import cost from "../img/savings.svg"
import style from "../components/styles/Home.module.css"
import Button from "../components/Button"
function Home(){
    return (
        <div className={style.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Button to="/newprojects" text="Criar Projeto"/>
            <div><img className={style.img} src={cost}/></div>
        </div>
    )
}
export default Home
