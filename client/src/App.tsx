import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { FrontendRoute } from './enums/Routes';
import { SET_CURRENT_USER } from './redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/auth';
import { RootState } from './redux/store';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLoggedInState() {
    setIsLoggedIn(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={FrontendRoute.LOGIN} element={<Auth isLoggedIn={isLoggedIn}handleLoggedInState={handleLoggedInState} />} />
        <Route path={FrontendRoute.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
