import * as C from './App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Footer } from './components/Footer';
import { CadastroMateriais } from './pages/CadastroMateriais';

const App = () => {
  return (
    <Router>
      <Navbar />
      <C.Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/materiais" element={<CadastroMateriais />} />
        </Routes>
      </C.Container>
      <Footer />
    </Router>
  );
};

export default App;
