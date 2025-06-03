



import { useState, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
import BellIcon from '../assets/svgs/notify_icon.svg'
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

import Header from '../components/Header';
import Footer from '../components/Footer';
const cryptos = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'https://cryptocurrencyicons.com/icons/btc/color/btc.png',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'https://cryptocurrencyicons.com/icons/eth/color/eth.png',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    icon: 'https://cryptocurrencyicons.com/icons/usdt/color/usdt.png',
  },
];

const Dashboard = () => {  
  // const navigate = useNavigate();  
  // const handleLogout = async () => {
  //   console.log('clicked')

  //   localStorage.removeItem('auth_token'); 
  //   localStorage.removeItem('isAuthenticated'); 
  //   toast.success('Logged out successfully!');
  //   setTimeout(() => {
  //     navigate("/login");
  //   }, 2000);
    
  // } 
  const [activeTab, setActiveTab] = useState("accept");
  const [selected, setSelected] = useState(cryptos[0]);
  return (<div>
    <ToastContainer position="top-right" autoClose={3000} />
              {/* <button onClick={handleLogout} type="button">LOGOUT</button>
              <h2>Protected Dashboard Page</h2> */}
               <div className='max-w-[600px] mx-auto'>
      <div className="min-h-screen flex flex-col items-center bg-white text-black font-sans bg-[var(--primary)]">  
      <Header />
      <div className='w-full px-4 bg-[var(--primary)] rounded-t-xl relative z-[1] pt-3'>
        {/* Tabs */}
      <div className="flex items-center justify-around text-sm">
        <div className='flex-1 flex items-center gap-2'>
        <div className='flex items-center p-1 border border-gray-300 rounded-lg'>
        <button
          className={`px-3 py-1 w-15 text-sm  rounded tracking-tighter font-medium ${activeTab === "deal" ? "bg-[#DCDCDC] text-black" : "text-[var(--text-color)]"}`}
          onClick={() => setActiveTab("deal")}
        >
          Deal
        </button>
        <button
          className={`px-3 py-1 w-15 text-sm rounded tracking-tighter font-medium ${activeTab === "accept" ? "bg-[#DCDCDC] text-black" : "text-[var(--text-color)]"}`}
          onClick={() => setActiveTab("accept")}
        >
          Accept
        </button>
        </div>
        <span className="text-red-500 text[15px] tracking-tighter font-medium">00:14:59 hrs</span>
        </div>
        <div className='shrink-0 flex items-center gap-2'>
          <button className="text-sm bg-yellow-400 text-black px-1 py-[2px] rounded tracking-tighter font-medium">New Deals</button>
          <button className='relative after:absolute after:top-0 after:right-[1px] after:w-2 after:h-2 after:bg-red-500 after:rounded-full'><img src={BellIcon} /></button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between gap-2 py-2 text-sm border-b">
        <div className='flex items-center gap-3'>
          <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-transparent pr-10 text-left shadow-none focus:outline-none  sm:text-sm">
            <span className="flex items-center">
              <img src={selected.icon} alt="" className="h-5 w-5 mr-2" />
              {selected.symbol}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {cryptos.map((crypto) => (
                <Listbox.Option
                  key={crypto.symbol}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={crypto}
                >
                  {({ selected }) => (
                    <>
                      <span className={`flex items-center ${selected ? 'font-semibold' : 'font-normal'}`}>
                        <img src={crypto.icon} alt="" className="h-5 w-5 mr-2" />
                        {crypto.symbol}
                      </span>
                      
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
        <select className="bg-gray-100 rounded px-2 py-1">
          <option>Amount</option>
        </select>
        <select className="bg-gray-100 rounded px-2 py-1">
          <option>Payment</option>
        </select>
        </div>
        <button className="text-xl">🔍</button>
      </div>

      {/* Trade Card */}
      <div className="m-4 border rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-1">
          <div className="font-semibold">🟢 Ledgerower <span className="text-purple-500">★</span></div>
          <div className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">Featured Deal</div>
        </div>
        <div className="text-xs text-gray-600 mb-2">Trade(s) 1824 (89.40%)</div>
        <div className="text-lg font-bold">₹ 92.01 <span className="text-sm text-gray-500">/USDT</span></div>
        <div className="text-xs text-gray-500 mb-4">
          Amount req. $100 <br />
          Available 18,27,639.38 USDT
        </div>
        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded">Reject</button>
          <button className="bg-green-500 text-white px-4 py-1 rounded">Accept</button>
        </div>
      </div>
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
    </div>
          </div>);
}
  



  export default Dashboard;