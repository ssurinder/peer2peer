import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import SignIn from './Auth/Login';
import SignUp from './Auth/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;