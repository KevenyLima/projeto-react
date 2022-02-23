import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Empresa from "./pages/Empresa"
import Projetos from "./pages/Projetos"
import NewProjects from "./components/NewProjects";
import Container from "./components/Container";
import EditPage from "./components/EditPage"

function App() {
  return (
    <Router>
        <Navbar/>
          <Switch>
            <Container customClass="min_height" >
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
            <Route path="/project/:id" >
                <EditPage/>
            </Route>
            </Container>
          </Switch>
        <Footer/>
    </Router>
    
  );
}

export default App;
