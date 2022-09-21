import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { DASHBOARD, LOGIN } from './routes/route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Auth />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
