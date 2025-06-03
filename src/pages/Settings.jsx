import React from 'react'
import Header from '../components/Header'
import {
  FaUser,
  FaBell,
  FaWallet,
  FaPlusSquare,
  FaGlobe,
  FaQuestionCircle,
  FaInfoCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const settingsItems = [
  { icon: <FaUser />, label: 'Account' },
  { icon: <FaBell />, label: 'Notifications' },
  { icon: <FaWallet />, label: 'Wallet address (BEP20)' },
  { icon: <FaPlusSquare />, label: 'Add Payment Methods' },
  { icon: <FaGlobe />, label: 'Language' },
  { icon: <FaQuestionCircle />, label: 'Help & feedback' },
  { icon: <FaInfoCircle />, label: 'About' },
];
const Settings = () => {
    const navigate = useNavigate();  
      const handleLogout = async () => {
        console.log('clicked')
    
        localStorage.removeItem('auth_token'); 
        localStorage.removeItem('isAuthenticated'); 
        toast.success('Logged out successfully!');
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        
      } 
  return (
    <div className='max-w-[600px] mx-auto w-full bg-[var(--primary)]'>
    <div className="min-h-screen flex flex-col items-center bg-white text-black font-sans ">  
      <div className='h-[calc(100vh_-_0px)] overflow-auto w-full bg-[var(--primary)] '>  
     <ToastContainer position="top-right" autoClose={3000} />
        <Header />
         <div className='w-full  bg-[var(--primary)] rounded-t-xl relative z-[1]'>
        <div className='w-full px-4  pt-3'>
         <h1 className="text-lg font-semibold px-4 mt-4">Settings</h1>

      {/* Settings List */}
      <div className="mt-2">
        {settingsItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 px-4 py-3 text-sm border-b border-[#EEEEEE]"
          >
            <div className="text-base text-black">{item.icon}</div>
            <span>{item.label}</span>
          </div>
        ))}

        {/* Logout */}
        <button onClick={handleLogout} type='button' className="flex items-center space-x-4 px-4 py-3 text-sm text-red-600">
          <FaSignOutAlt />
          <span>Log out</span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-auto py-4 text-center text-xs text-gray-500">
        <div className="flex justify-center items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c.867 0 1.625-.367 2.2-.958M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-4.243 7.243a5 5 0 00-7.071 0M15 19.5a3.5 3.5 0 00-6 0"
            />
          </svg>
          <span>A secure P2P service provider</span>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div></div>
  )
}

export default Settings