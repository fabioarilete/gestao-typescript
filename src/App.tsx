import * as C from './App.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <C.Navbar />
      <C.Container>
        <Routes>
          <C.Body>hello World!</C.Body>
        </Routes>
      </C.Container>
      <C.Footer />
    </Router>
  );
};

export default App;
