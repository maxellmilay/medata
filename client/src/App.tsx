import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { FrontendRoute } from './enums/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={FrontendRoute.LOGIN} element={<Auth />} />
        <Route path={FrontendRoute.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
