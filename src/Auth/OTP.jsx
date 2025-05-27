import React ,{useRef } from 'react';
import Logo from '../assets/svgs/logo.svg';

const OTP = ({ setEnterOtp }) => {
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here
    console.log('OTP submitted');
  };
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return;

    // Move to next input
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
      <img src={Logo} alt="Logo" className="w-32 mt-5 inline-block" />
      <h1 className="text-2xl font-semibold leading-4 mt-6 mb-10">Welcome to Coin P2P Trader</h1>
      <form className="w-full space-y-4" onSubmit={handleOtpSubmit}>
      <label className="text-[15px] leading-4 text-black text-left font-medium mb-3 block w-full">
              OTP
            </label>
        <div className="flex items-center justify-start space-x-4">
      {Array(4).fill().map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          ref={el => inputs.current[i] = el}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
        
        <button
          type="submit"
          className="w-full rounded-xl py-3 px-4 text-base leading-5 text-black font-normal cursor-pointer bg-gradient-to-r from-[var(--button-gradient-1)] to-[var(--button-gradient-2)]"
        >
          Continue
        </button>

        {/* Optional: Back button */}
        <button
          type="button"
          onClick={() => setEnterOtp(false)}
          className="mt-2 text-sm text-gray-600 underline"
        >
          Back
        </button>
      </form>
    </>
  );
};

export default OTP;
