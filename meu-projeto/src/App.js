import Footer from "./components/Footer";
import Header from "./components/Header";
import ContentBox from "./components/ContentBox"
import {BrowserRouter as Router, Switch ,Route,Link} from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Empresa from "./pages/Empresa"
import Projetos from "./pages/Projetos"

function App() {
  return (
    <Router>
        <Header/>
          <Switch>
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
          </Switch>
        <Footer/>
    </Router>
    
  );
}

export default App;
