import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp'; 
import Home from './Home'; 
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AuthGuard from "./components/AuthGuard"; 
import VerifySignup from "./Auth/VerifySignUp";
import ForgotPassword from "./Auth/ForgotPassword"
import RegisterSuccess from "./Auth/RegisterSuccess"

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/veify_signup" element={<VerifySignup />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register-success" element={<RegisterSuccess />} /> 
      
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;