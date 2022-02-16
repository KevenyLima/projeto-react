function Projetos(){
    async function getContent(){
        try{
             const response = await fetch('http://localhost:5000/categories')
             const data = await response.json()
             console.log(data)
            }
        catch(error){
            console.log(error)
        }
    }

    getContent()
    return (
        <>
        <h1>Projetos</h1>
        <div>conteudo Projetos</div>
        </>
    )
}
export default Projetos