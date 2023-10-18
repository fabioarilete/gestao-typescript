import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Footer } from './components/Footer';
import { CadastroMateriais } from './pages/CadastroMateriais';
import { CadastroOperacoes } from './pages/CadastroOperacoes';
import { CadastroMarkUps } from './pages/CadastroMarkUps';
import { Materiais } from './pages/Materiais';
import { Operacoes } from './pages/Operacoes';
import Container from './components/Container';
import SideBar from './components/SideBar';
import { Material } from './pages/Material';
import { Operacao } from './pages/Operacao';

const App = () => {
  return (
    <Router>
      <SideBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/materiais" element={<CadastroMateriais />} />
          <Route path="/operacoes" element={<CadastroOperacoes />} />
          <Route path="/markUps" element={<CadastroMarkUps />} />
          <Route path="/materiaPrima" element={<Materiais />} />
          <Route path="/materiaPrima/:id" element={<Material />} />
          <Route path="/listaOperacoes" element={<Operacoes />} />
          <Route path="/listaOperacoes/:id" element={<Operacao />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
