import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/Routes';
import SideBar from './components/Sidebar';
import Container from './components/Container';
import { Footer } from './components/Footer';
import { Provider } from './context/Provider';

const App = () => {
  return (
    <Router>
      <Provider>
        <SideBar />
        <Container>
          <AppRoutes />
        </Container>
        <Footer />
      </Provider>
    </Router>
  );
};

export default App;
