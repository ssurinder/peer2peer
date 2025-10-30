import React, { useState } from 'react'
import Logo from '../assets/svgs/logo.svg'
import GoogleIcon from '../assets/svgs/google-icon.svg'
import AppleIcon from '../assets/svgs/apple-icon.svg'
import MicrosoftIcon from '../assets/svgs/microsoft-icon.svg'
import VarifyIcon from '../assets/images/varify.png'
import { useNavigate } from "react-router-dom";
import { registerUser, validateSponser } from "../api/api";
import Select from 'react-select';
import { countries } from './../components/coutries';

import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
const Signup = () => {


  const navigate = useNavigate();
  const [sponsorId, setSponserId] = useState('');
  const [sponserName, setSponserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError('');
    try {
      let formData = {
        name: name,
        email: email,
        countryCode: selectedCountry.value,
        phoneNumber: phoneNumber,
        country: selectedCountry.label,
        sponsorId: sponsorId,
        password: password
      }
      let response = await registerUser(formData);
      console.log(formData, 'resp is '.resp)
      if (response.success == true) {
        toast.success(response.message);
        navigate("/veify_signup", { state: { email: formData.email, password: password } });
      } else {
        toast.error(response.message);
      }
      // navigate("/login");
    } catch (err) {
      // setError(err.message);
      toast.error(err.message);

    } finally {
      // setLoading(false);
    }
  };

  const validateSponserId = async () => {
    // console.log(' now we are validating for sponser' , sponserId)
    let response = await validateSponser(sponsorId)
    if (response.success == false) {
      toast.error(response.message);
      setSponserName('')
    } else {
      setSponserName(response.data.name)
      toast.success(response.message);

    }
  }
  return (
    <div className='max-w-[600px] mx-auto'>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="min-h-screen px-6 py-4 flex flex-col items-center justify-between bg-white text-black font-sans">

        <div className='w-full text-center'>
          <img src={Logo} alt="Logo" className="w-32 mt-5 inline-block" />
          <h1 className="text-xl font-semibold leading-4 mt-6 mb-10">Welcome to Coin P2P Trader</h1>
          <form className="w-full space-y-4 " onSubmit={handleSubmit}>
            <input type="text" onBlur={validateSponserId} onChange={(e) => setSponserId(e.target.value)} placeholder="Sponser ID" className="w-full placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
            <input type="text" placeholder="Sponser Name" value={sponserName} className="w-full placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" readOnly />
            <input type="text" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} className="w-full placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
            <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className="w-full placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="w-full placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
            {/* <input type="text" placeholder="Choose country" className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" /> */}
            <Select
              options={countries}
              onChange={setSelectedCountry}
              placeholder="Select country"
              styles={{
                placeholder: (base) => ({ ...base, color: 'black', textAlign: 'left' }),
              }}
            />

            <div className="flex gap-3">
              <input type="text" placeholder="Country code" value={selectedCountry.value} className="w-1/3 placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
              <input type="text" placeholder="Enter Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} className="w-2/3 placeholder:text-black px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
            </div>

            <button className="w-full rounded-xl py-3 px-4 text-base leading-5  text-black font-normal cursor-pointer bg-gradient-to-r from-[var(--button-gradient-1)] to-[var(--button-gradient-2)]">Sign up</button>
            <p>Already have an account ? <Link className='font-semibold text-[var(--link-color)]' to="/login">Login</Link></p>
            {/* <div className="space-y-3">
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
            </div> */}

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