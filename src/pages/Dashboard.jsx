import { useState, Fragment } from 'react';
import BellIcon from '../assets/svgs/notify_icon.svg'
import Header from '../components/Header';
import UsdtIcon from '../assets/images/usdt.png'
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Deal from '../components/Deal';


const Dashboard = () => {  
  const [activeTab, setActiveTab] = useState("deal");
  
  return (    
          <div className='max-w-[600px] mx-auto w-full bg-[var(--primary)]'>
            <div className="min-h-screen flex flex-col items-center bg-white text-black ">  
              <div className='h-[calc(100vh_-_56px)] overflow-auto w-full bg-[var(--primary)] '> 
                <Header />
                <div className='w-full bg-[var(--primary)] rounded-t-xl relative z-[1] overflow-auto'>
                  <div className='w-full pt-3'>
                  {/* Tabs */}
                    <div className="flex items-center justify-around text-sm px-4">
                      <div className='flex-1 flex items-center gap-2'>
                      <div className='flex items-center p-1 border border-[var(--border-light)] rounded-lg'>
                      <button
                        className={`px-3 py-1 w-15 text-sm  rounded tracking-tighter font-medium ${activeTab === "deal" ? "bg-[#DCDCDC] text-black" : "text-[var(--tab-color)]"}`}
                        onClick={() => setActiveTab("deal")}
                      >
                        Deal
                      </button>
                      <button
                        className={`px-3 py-1 w-15 text-sm rounded tracking-tighter font-medium ${activeTab === "accept" ? "bg-[#DCDCDC] text-black" : "text-[var(--tab-color)]"}`}
                        onClick={() => setActiveTab("accept")}
                      >
                        Accept
                      </button>
                      </div>
                      <span className="text-[var(--red)] text[15px] tracking-tighter font-medium">00:14:59 hrs</span>
                      </div>
                      <div className='shrink-0 flex items-center gap-2'>
                        <button className="text-sm bg-yellow-400 text-black px-1 py-[2px] rounded tracking-tighter font-medium">New Deals</button>
                        <button className='relative after:absolute after:top-0 after:right-[1px] after:w-2 after:h-2 after:bg-red-500 after:rounded-full'><img src={BellIcon} /></button>
                      </div>
                    </div>

                
                  <Filter />
                {/* Trade Card */}
                <div className='flex flex-col px-4'>
                {activeTab === "deal" && (
                  <>
                  <Deal />
                  </>
                  
                )}
                {activeTab === "accept" && (
                  <div className="border border-[var(--bg-color)] rounded-lg p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 border-r-xl pl-4 rounded-bl-full text-[8px] font-semibold leading-4">Featured Deal</div>
                    <div className="flex justify-between items-center mb-1">
                      <div className="items-center flex">
                        <img src={UsdtIcon} className='shrink-0' />
                        <span className='ml-2 font-medium font-sm text-black'>Ledgerower</span>
                        <span className="ml-2">
                          {/* Star icon */}
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.5L11.0206 6.71885H17.5595L12.2694 10.5623L14.2901 16.7812L9 12.9377L3.70993 16.7812L5.73056 10.5623L0.440492 6.71885H6.97937L9 0.5Z" fill="#A707F1"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="text-xs font-normal text-[var(--text-color)]">Trade(s) 1824 (89.40%)</div>
                    <div className='flex items-end justify-between'>
                      <div className='flex-1'>
                        <div className="text-lg"><span className='text-sm font-bold'>₹</span> 92.01<span className="text-sm text-[var(--text-color)]">/USDT</span></div>
                        <div className="text-xs  text-[var(--text-color)]">
                          Amount req. $100 <br />
                          Available 18,27,639.38 USDT
                        </div>
                      </div>
                      <div className="flex flex-col justify-end gap-2 shrink-0">
                        <button className="bg-[var(--button-light)] text-[var(--red)] px-4 py-1 rounded">Reject</button>
                        <button className="bg-[var(--success)] text-white px-4 py-1 rounded">Accept</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>  
            </div>
                </div>
              </div>
              {/* Bottom Navigation */}
              <Footer />
            </div>
          </div>
        );
}
  export default Dashboard;