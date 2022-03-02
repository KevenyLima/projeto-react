import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
      <Navbar />
      <Container customClass="min_height" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/newprojects" element={<NewProjects />} />
          <Route path="/projects/:id" element={<EditPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
