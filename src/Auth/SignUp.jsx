import React,  {useState } from 'react'
import Logo from '../assets/svgs/logo.svg'
import GoogleIcon from '../assets/svgs/google-icon.svg'
import AppleIcon from '../assets/svgs/apple-icon.svg'
import MicrosoftIcon from '../assets/svgs/microsoft-icon.svg'
import VarifyIcon from '../assets/images/varify.png' 
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";
const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  
  const handleSubmit = async () => {
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className='max-w-[600px] mx-auto'>
      <div className="min-h-screen px-6 py-4 flex flex-col items-center justify-between bg-white text-black font-sans">            
            
            <div className='w-full text-center'>
            <img src={Logo} alt="Logo" className="w-32 mt-5 inline-block" />
              <h1 className="text-2xl font-semibold leading-4 mt-6 mb-10">Welcome to Coin P2P Trader</h1> 
              <form className="w-full space-y-4">
                  <input type="text" placeholder="Sponser ID" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
                  <input type="text" placeholder="Sponser Name" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
                  <input type="text" placeholder="Enter your Name" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
                  <input type="email" placeholder="Enter Email" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
                  <input type="text" placeholder="Choose country" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />

                  <div className="flex gap-3">
                  <input type="text" placeholder="Country code" className="w-1/3 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
                  <input type="text" placeholder="Enter Phone Number" className="w-2/3 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
                  </div>

                  <button className="w-full rounded-xl py-3 px-4 text-base leading-5  text-black font-normal cursor-pointer bg-gradient-to-r from-[var(--button-gradient-1)] to-[var(--button-gradient-2)]">Sign up</button>

                  <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base leading-5 bg-white text-black font-normal cursor-pointer rounded-xl border border-neutral-300 hover:bg-gray-100">
                      <img src={GoogleIcon} className="w-5 h-5" alt="Google" />
                      Sign in with Google
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base leading-5 bg-white text-black font-normal cursor-pointer rounded-xl border border-neutral-300 hover:bg-gray-100">
                      <img src={MicrosoftIcon} className="w-5 h-5" alt="Microsoft" />
                      Sign in with Microsoft
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base leading-5 bg-white text-black font-normal cursor-pointer rounded-xl border border-neutral-300 hover:bg-gray-100">
                      <img src={AppleIcon} className="w-5 h-5" alt="Apple" />
                      Sign in with Apple
                  </button>
                  </div>
                  
              </form>
              </div> 
        <div className="pt-3 w-full sticky bottom-0 bg-white flex justify-center items-center text-xs text-gray-500 gap-1">
          <img src={VarifyIcon} alt='' className='w-4 h-4' />
          A secure P2P service provider
        </div>
      </div>
    </div>
  )
}

export default Signup