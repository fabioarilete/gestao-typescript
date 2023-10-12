import * as C from './App.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <C.Navbar />
      <C.Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/custos" element={<Custos />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/materiais" element={<Materiais />} />
        </Routes>
      </C.Container>
      <C.Footer />
    </Router>
  );
};

export default App;
