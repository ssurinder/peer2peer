import React, { useState } from 'react'; 
import Logo from '../assets/svgs/logo.svg'; 
import VarifyIcon from '../assets/images/varify.png'; 
import { useNavigate } from "react-router-dom"; 
import { loginUser } from "../api/api"; 
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { useLocation } from "react-router-dom";

const RegisgterSuccess = () => { 
  
    const location = useLocation();
    const { data} = location.state || {};
  return (
    <div className='max-w-[600px] mx-auto'>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen py-4 flex flex-col items-center justify-between bg-white text-black font-sans">
            <>
            <div className='w-full text-center'>
              <img src={Logo} alt="Logo" className="w-32 mt-5 inline-block" />
              <h1 className="text-2xl font-semibold leading-4 mt-6 mb-10">Welcome to Coin P2P Trader</h1>
              Dear {data.name} , <br/>
              Your account Have been Successfully Created<br/>
              You can login with<br/>
              UserID : {data.userId}<br/>
              Password : {data.password}<br/>
            </div>
            </> 
        <p><Link to="/login">Login?</Link></p>
      <div className="pt-3 w-full sticky bottom-0 bg-white flex justify-center items-center text-xs text-gray-500 gap-1">
        <img src={VarifyIcon} alt='' className='w-4 h-4' />
        A secure P2P service provider
      </div>
      </div>
    </div>
  );
};

export default RegisgterSuccess;
