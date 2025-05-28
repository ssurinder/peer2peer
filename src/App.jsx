import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;