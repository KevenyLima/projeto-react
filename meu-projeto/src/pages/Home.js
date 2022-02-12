import cost from "../img/savings.svg"
import style from "../components/styles/Home.module.css"
function Home(){
    return (
        <div className={style.content}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <div className={style.buttom}>Criar projeto</div>
            <div><img src={cost}/></div>
        </div>
    )
}
export default Home