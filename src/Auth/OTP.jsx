import React, { useRef, useState } from 'react';
import Logo from '../assets/svgs/logo.svg';
import CreatePassword from './CreatePassword';

const OTP = ({ setEnterOtp }) => {
    const [createPassword, setCreatePassword] = useState(false)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setCreatePassword(true);
    // Add OTP verification logic here
    console.log('OTP submitted');
  };
const handleEnterOtp = () => {
  setCreatePassword(false);
};
  const handleResendOtp = () => {
    // Add resend OTP logic here
    console.log('Resend OTP');
  };

  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return;
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <>
    {createPassword ? (
        <CreatePassword setCreatePassword={setCreatePassword}   />
    ) : (
        <div className='w-full flex flex-col justify-center'>
        <img src={Logo} alt="Logo" className="w-32 mt-5 inline-block mx-auto" />
      <h1 className="text-2xl font-semibold text-center  leading-4 mt-6 mb-10">Enter OTP</h1>
      <p className="text-base font-normal text-black leading-6 text-center">
        OTP sent to your registered Email Address
      </p>
      <p className="text-base font-normal text-black leading-6 mb-6 text-center">
        Please enter the OTP and click on Continue
      </p>

      <form className="w-full space-y-4" onSubmit={handleOtpSubmit}>
        <label className="text-[15px] leading-4 text-black text-left font-medium mb-3 block w-full">
          OTP
        </label>

        <div className="flex items-center justify-start space-x-4">
          {Array(4)
            .fill()
            .map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                ref={(el) => (inputs.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-14 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl py-3 px-4 text-base leading-5 text-black font-normal cursor-pointer bg-gradient-to-r from-[var(--button-gradient-1)] to-[var(--button-gradient-2)]"
        >
          Continue
        </button>

        {/* Resend OTP button */}
        <button
          type="button"
          onClick={handleResendOtp}
          className="mt-4  w-full text-base leading-5 text-black font-normal cursor-pointer text-center"
        >
         Resend OTP
        </button>
      </form>
        </div>
    )
    }
      
    </>
  );
};

export default OTP;
