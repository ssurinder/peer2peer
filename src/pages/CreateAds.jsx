import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { t, setLang } from '../components/i18n'
import { Link } from 'react-router-dom';
import checkIcon from '../assets/images/checkIcon.png'

const CreateAds = () => {
    const [price, setPrice] = useState(82.51);
  const [minLimit, setMinLimit] = useState(1000);
  const [maxLimit, setMaxLimit] = useState(5000);
  const [availableAmount] = useState("10,000");
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <div className='max-w-[600px] mx-auto w-full bg-[var(--primary)]'>
    <div className="min-h-screen flex flex-col items-center bg-white text-black font-sans ">  
      <div className='h-[calc(100vh_-_60px)] overflow-auto w-full bg-[var(--primary)] '>
        <Header />
        <div className='w-full bg-[var(--primary)] rounded-t-xl relative z-[1]'>
            <div className='w-full pt-3'>
              <h1 className="text-base font-semibold px-4 pb-3 border-b border-gray-400">{t('CreateAd')}</h1>
              <div className="w-full space-y-3 px-4 mt-4">
                 {/* Fixed Price */}
      <div>
        <label className="block mb-1 text-base font-normal">Fixed price</label>
        <div className="flex items-center border border-gray-300 bg-white rounded px-3 py-2">
          <button className="text-lg font-bold px-2">-</button>
          <div className="flex-1 text-center text-base font-normal text-black focus-visible:outline-0">{price}</div>
          <button className="text-lg font-bold px-2">+</button>
        </div>
      </div>

      {/* Limit Amount */}
      <label className="block mb-1 text-base font-normal">Limit amount</label>
      <div className="flex items-center gap-2 w-full justify-between">
      
      {/* Min input */}
      <div className="relative flex-1 border border-gray-300 bg-white rounded-md px-3 py-2">
        <input
          type="number"
          value={minLimit}
          onChange={(e) => setMinLimit(e.target.value)}
          className=" font-normal text-black focus-visible:outline-0 w-full pr-6"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          min.
        </span>
      </div>

      {/* Dash between inputs */}
      <span className="text-gray-400 shrink-0">-</span>

      {/* Max input */}
      <div className="relative flex-1 border border-gray-300 bg-white rounded-md px-3 py-2">
        <input
          type="number"
          value={maxLimit}
          onChange={(e) => setMaxLimit(e.target.value)}
          className="font-normal text-black focus-visible:outline-0 w-full pr-6"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          max.
        </span>
      </div>
    </div>

      {/* Available Amount */}
      <div>
        <label className="block mb-1 text-base font-normal">Available amount</label>
        <div className="flex justify-between items-center border border-gray-300 bg-white rounded px-3 py-2">
          <span className=' font-normal text-black'>{availableAmount}</span>
          <span className="text-gray-500">USDT</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div>
        <label className="block mb-1 text-base font-normal">Payment methods</label>
        <select
          className="w-full border border-gray-300 bg-white rounded px-3 py-2  font-normal text-black focus-visible:outline-0"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select payment method</option>
          <option value="bank">Bank To Bank</option>
          <option value="upi">UPI</option>
          <option value="paypal">Both</option>
        </select>
      </div>
      <button type="submit" className=" mt-4 w-full rounded-xl py-3 px-4 text-base leading-5 text-white font-normal cursor-pointer bg-[var(--bg-color)]">
      {t('CreateAd')}
                  </button>
              </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    </div>
  )
}

export default CreateAds