import * as C from './App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Footer } from './components/Footer';
import { CadastroMateriais } from './pages/CadastroMateriais';
import { CadastroOperacoes } from './pages/CadastroOperacoes';
import { CadastroMarkUps } from './pages/CadastroMarkUps';
import { Materiais } from './pages/Materiais';
import { SideBar } from './components/SideBar';

const App = () => {
  return (
    <Router>
      {/* <SideBar /> */}
      <Navbar />
      <C.Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/materiais" element={<CadastroMateriais />} />
          <Route path="/operacoes" element={<CadastroOperacoes />} />
          <Route path="/markUps" element={<CadastroMarkUps />} />
          <Route path="/materiaPrima" element={<Materiais />} />
        </Routes>
      </C.Container>
      <Footer />
    </Router>
  );
};

export default App;
