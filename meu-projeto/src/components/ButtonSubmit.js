import { Link } from "react-router-dom"
function ButtonSubmit({to,text}){


  return (
      <>
        <Link to={to}>{text}</Link>
      </>
  )
}

export default ButtonSubmit