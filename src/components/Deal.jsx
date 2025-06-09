import React, { useState } from 'react';
import DealModal from './DealModal'; // Adjust path if needed
import UsdtIcon from '../assets/images/usdt.png';
import { useNavigate } from 'react-router-dom';

const Deal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalDeal, setFinalDeal] = useState(false)
   const navigate = useNavigate();

  const handleDealDetail = () => {
    navigate('/deal-detail');
  };

  return (
    <>
      {
    finalDeal ? (
      <div className=" border rounded-xl border-[var(--bg-color)] p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 border-r-xl pl-4 rounded-bl-full text-[8px] font-semibold leading-4">Featured Deal</div>
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
            <img src={UsdtIcon} className="w-5 h-5 shrink-0" />
            <span className="ml-2 font-medium text-sm text-black">YourName</span>
          </div>
        </div>
        <div className="text-xs text-gray-600 mb-2">Your Deal - #192837</div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-lg font-medium">
              ₹91.20 <span className="text-sm text-gray-500">/USDT</span>
            </div>
            <div className="text-xs text-gray-500">
              Offer: $500 <br />
              Remaining: 12,000 USDT
            </div>
          </div>
          
          
          <button
            onClick={handleDealDetail}
            className="bg-[var(--btn-disable)] text-white text-sm px-4 py-[6px] rounded"
          >
            Wait for seller
          </button>
          
        </div>
      </div>
    ) :(
      <div className=" border-b border-[var(--border-light)] pt-0 px-4 pb-4 relative overflow-hidden">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
            <img src={UsdtIcon} className="w-5 h-5 shrink-0" />
            <span className="ml-2 font-medium text-sm text-black">YourName</span>
          </div>
        </div>
        <div className="text-xs text-gray-600 mb-2">Your Deal - #192837</div>
        <div className="flex justify-between items-end">
          <div>
            <div className="text-lg font-medium">
              ₹91.20 <span className="text-sm text-gray-500">/USDT</span>
            </div>
            <div className="text-xs text-gray-500">
              Offer: $500 <br />
              Remaining: 12,000 USDT
            </div>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[var(--red)] text-white text-sm px-4 py-[6px] rounded"
          >
            Deal
          </button>
          
        </div>
      </div>
    )
      }

      

      <DealModal  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onDealConfirmed={() => setFinalDeal(true)} />
    </>
  );
};

export default Deal;
