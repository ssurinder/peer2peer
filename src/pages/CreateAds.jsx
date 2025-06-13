import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { t } from '../components/i18n';
import {CreateDeal } from '../api/api'
import { toast } from 'react-toastify';

const CreateAds = () => {
  
  const [price, setPrice] = useState(0);
  const [minLimit, setMinLimit] = useState(0);
  const [maxLimit, setMaxLimit] = useState(0);
  const [availableAmount, setavailableAmount] = useState(0);
  
  const [paymentMethod, setPaymentMethod] = useState([]);

  const handleCreateAd = async (e) => {
    e.preventDefault();

    const payload = {
      price:Number(price),
      minLimit: Number(minLimit),
      maxLimit: Number(maxLimit),
      availableAmount: Number(availableAmount.replace(/,/g, '')), // remove comma
      paymentMethods: paymentMethod,
    };
    console.log(payload, 'payload');
    try {
     let response = await CreateDeal(payload);

      // const data = await response.json();
console.log(response?.message);

      if (response.success === true) {
      toast.success(response.message); 
        // You can reset the form or navigate
      } else {
        alert('Failed to create deal: ' + (response.message || 'Unknown error'));
      }
    } catch (err) {
      console.error(err);
      // alert('An error occurred while creating the deal.');
    }
  };

  return (
    <div className='max-w-[600px] mx-auto w-full bg-[var(--primary)]'>
      <div className="min-h-screen flex flex-col items-center bg-white text-black font-sans ">  
        <div className='h-[calc(100vh_-_56px)] overflow-auto w-full bg-[var(--primary)] '>
          <Header />
          <div className='w-full bg-[var(--primary)] rounded-t-xl relative z-[1]'>
            <form className='w-full pt-3' onSubmit={handleCreateAd}>
              <h1 className="text-base font-semibold px-4 pb-3 border-b border-gray-400">{t('CreateAd')}</h1>
              <div className="w-full space-y-3 px-4 mt-4">
                {/* Fixed Price */}
                <div>
                  <label className="block mb-1 text-base font-normal">Fixed price</label>
  <div className="flex items-center border border-gray-300 bg-white rounded px-3 py-2">
    <button
      className="text-lg font-bold px-2"
      type="button"
      onClick={() => setPrice((prev) => Math.max(0, (parseFloat(prev) - 1).toFixed(2)))}
    >
      -
    </button>
    <input
      type="number"
      step="0.01"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="flex-1 text-center text-base font-normal text-black focus:outline-none"
    />
    <button
      className="text-lg font-bold px-2"
      type="button"
      onClick={() => setPrice((prev) => (parseFloat(prev) + 1).toFixed(2))}
    >
      +
    </button>
  </div>
                </div>

                {/* Limit Amount */}
                <label className="block mb-1 text-base font-normal">Limit amount</label>
                <div className="flex items-center gap-2 w-full justify-between">
                  <div className="relative flex-1 border border-gray-300 bg-white rounded-md px-3 py-2">
                    <input
                      type="number"
                      value={minLimit}
                      onChange={(e) => setMinLimit(e.target.value)}
                      className="font-normal text-black w-full pr-6"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">min.</span>
                  </div>
                  <span className="text-gray-400 shrink-0">-</span>
                  <div className="relative flex-1 border border-gray-300 bg-white rounded-md px-3 py-2">
                    <input
                      type="number"
                      value={maxLimit}
                      onChange={(e) => setMaxLimit(e.target.value)}
                      className="font-normal text-black w-full pr-6"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">max.</span>
                  </div>
                </div>

                {/* Available Amount */}
                <div>
                  <label className="block mb-1 text-base font-normal">Available amount</label>
                  <div className="flex justify-between items-center border border-gray-300 bg-white rounded px-3 py-2">
                  <input
                      type="number"
                      value={availableAmount}
                      onChange={(e) => setavailableAmount(e.target.value)}
                      className="font-normal text-black w-full pr-6"
                    />
                    
                    <span className="text-gray-500">USDT</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="block mb-1 text-base font-normal">Payment methods</label>
                  <select
                    className="w-full border border-gray-300 bg-white rounded px-3 py-2 font-normal text-black"
                    value={paymentMethod}
                    onChange={(e) => {
      const selected = Array.from(e.target.selectedOptions, option => option.value);
      setPaymentMethod(selected);
    }}
                    required
                  >
                    <option value="">Select payment method</option>
                    <option value="BANK_TO_BANK">Bank To Bank</option>
                    <option value="UPI">UPI</option>
                    <option value="BANK_TO_BANK,UPI">Both</option>
                  </select>
                </div>

                <button type="submit" className="mt-4 w-full rounded-xl py-3 px-4 text-base leading-5 text-white font-normal cursor-pointer bg-[var(--bg-color)]">
                  {t('CreateAd')}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateAds;
