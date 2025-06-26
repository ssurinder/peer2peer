import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp'; 
import Home from './Home'; 
import WhyP2p from './landing_pages/whyp2p';
import Dashboard from "./pages/Dashboard";
import Profile from './pages/Profile';
import Settings from './pages/Profile/Settings';
import AuthGuard from "./components/AuthGuard"; 
import VerifySignup from "./Auth/VerifySignUp";
import ForgotPassword from "./Auth/ForgotPassword"
import RegisterSuccess from "./Auth/RegisterSuccess"
import PaymentMethod from './pages/Profile/PaymentMethod';
import AddBank from './pages/Profile/PaymentMothod/AddBank';
import AddUpi from './pages/Profile/PaymentMothod/AddUpi';
import CreateAds from './pages/CreateAds';
import DealDetail from './components/DealDetail';
import Orders from './pages/Orders';
import Deposite from './pages/Saller/Deposite';
import PaymentHistory from './pages/Profile/PaymentHistory';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whyp2p" element={<WhyP2p />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/veify_signup" element={<VerifySignup />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register-success" element={<RegisterSuccess />} /> 
      
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route element={<AuthGuard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/deal-detail' element={<DealDetail />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/createads' element={<CreateAds />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path='/addbank' element={<AddBank />} />
        <Route path='/addupi' element={<AddUpi />} />
        <Route path='/deposite' element={<Deposite />} />
        <Route path='/paymenthistory' element={<PaymentHistory />} />
        
      </Route>
    </Routes>
  );
};

export default App;