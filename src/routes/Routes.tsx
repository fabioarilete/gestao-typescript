import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Materials from '../pages/RawMaterial/Materials';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/materialsList" element={<Materials />} />
      {/* <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/materiais" element={<CadastroMateriais />} />
          <Route path="/materiaPrima/:id" element={<Material />} />
          <Route path="/operacoes" element={<CadastroOperacoes />} />
          <Route path="/listaOperacoes" element={<Operacoes />} />
          <Route path="/listaOperacoes/:id" element={<Operacao />} />
          <Route path="/markUps" element={<CadastroMarkUps />} />
          <Route path="/listaMarkUps" element={<MarkUps />} />
          <Route path="/listaMarkUps/:id" element={<MarkUp />} />
          <Route path="/custos" element={<CadastroCustos />} />
          <Route path="/produtos" element={<Custos />} /> */}
    </Routes>
  );
};

export default AppRoutes;
