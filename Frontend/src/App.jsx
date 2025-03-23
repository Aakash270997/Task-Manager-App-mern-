import React from 'react';
import { Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashborad' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App