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
      
    
      <div className=" border-b border-[var(--border-light)] p-4 relative overflow-hidden">
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
          
          {
finalDeal ? (
          <button
            onClick={handleDealDetail}
            className="bg-[var(--btn-disable)] text-white text-sm px-4 py-[6px] rounded"
          >
            Wait for seller
          </button>
          ) : (
            <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[var(--red)] text-white text-sm px-4 py-[6px] rounded"
          >
            Deal
          </button>
          )}
        </div>
      </div>

      

      <DealModal  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onDealConfirmed={() => setFinalDeal(true)} />
    </>
  );
};

export default Deal;
