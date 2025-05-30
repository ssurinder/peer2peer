import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import SignIn from './Auth/Login';
import SignUp from './Auth/SignUp';
import Dashboard from "./pages/Dashboard";
import AuthGuard from "./components/AuthGuard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;