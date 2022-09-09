import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
