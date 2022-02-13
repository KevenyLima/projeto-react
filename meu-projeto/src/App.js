import Footer from "./components/Footer";
import Header from "./components/Header";
import ContentBox from "./components/ContentBox"
import {BrowserRouter as Router, Switch ,Route,Link} from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Empresa from "./pages/Empresa"
import Projetos from "./pages/Projetos"
import NewProjects from "./components/NewProjects";
import Container from "./components/Container";

function App() {
  return (
    <Router>
        <Header/>
          <Switch>
            <Container customClass="column" >
              <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/empresa">
              <Empresa/>
            </Route>
            <Route path="/contato">
              <Contato/>
            </Route>
            <Route path="/projetos">
              <Projetos/>
            </Route>
            <Route path="/newprojects">
              <NewProjects/>
            </Route>
            </Container>
          </Switch>
        <Footer/>
    </Router>
    
  );
}

export default App;
