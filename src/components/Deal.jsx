
import React, { useState,useEffect } from 'react'
import { getData ,postData } from '../api/protectedApi';

import Timer from './Timer';
import ExchangeIcon from '../assets/images/exchnage.png'
import DealModal from './DealModal'; // Adjust path if needed
import BuyerPaymentCard from '../components/BuyerPaymentCard'
import UsdtIcon from '../assets/images/usdt.png';
import { useNavigate } from 'react-router-dom'; 
import { toast, ToastContainer } from 'react-toastify'

const Deal = () => {
  const [dealList , setDealList] = useState([]) 
  const [currentDeal , setCurrentDetail] = useState(false)  
  useEffect(() => {
      getData('/user/allDeals', {})
      .then((res) => {
        if(res.data.data.dealStatus == false) 
          setDealList(res.data.data.deals)
        else
          setCurrentDetail(res.data.data.deal) 

         , console.log('data ', res.data.data) })
      .catch((err) => console.error(err));
 
  }, []);
 
  const [isOpen, setIsOpen] = useState(false);
  const [isBuyerFormOpen , setIsBuyerFormOpen] = useState(false)

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [dealDetail , setDealDetail] = useState({})
  const [currentDealId , setcurrentDealId] = useState(null)
  // const [finalDeal, setFinalDeal] = useState(false)
  const navigate = useNavigate();
  const showDealDetails = (deal) => {
    setDealDetail(deal)
    setIsOpen(true )
  }

  const hideBuyerPaymentCard = () => {
    setIsBuyerFormOpen(false)
  }

  const handleDeal = (dealId) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        postData('/user/pickDeal', {id:dealId})
      .then((res) => {  
         console.log('data ',res) 
         toast.error(res)
        
        })
      .catch((err) => console.error(err));

    } else {
      console.log("Cancelled");
    }
  }; 

  return (
    <>
        {/* show current deal */}
        {
          currentDeal  &&
            (
              <>

                <div className=" border-b border-[var(--border-light)] pt-0 px-4 pb-4 relative overflow-hidden" >  
                  <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <img src={UsdtIcon} className="w-5 h-5 shrink-0" />
                        <span className="ml-2 font-medium text-sm text-black">{currentDeal?.seller?.name}</span>
                           <Timer expireAt={currentDeal.timestamps.expireAt} /> 
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">Your Deal - #{currentDeal?._id}</div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-lg font-medium">
                          ₹{currentDeal?.deal?.price}<span className="text-sm text-gray-500">/USDT</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Quantity: {currentDeal?.deal?.availableAmount} <br />
                          Payable: {currentDeal?.fiatAmount}  ₹
                          <p> UPI</p>
                        </div>
                      </div>
                       {/* {
                          currentDeal.status === 'PENDING' ? ( <> <button className="bg-[var(--success)] text-white px-4 py-1 rounded">WAITING</button></>  ) : 
                          ( 
                            <button className="bg-[var(--button-light)] text-[var(--red)] px-4 py-1 rounded" onClick={() => {setcurrentDealId(currentDeal?._id), setIsBuyerFormOpen(true)} } >
                            View</button>
                          )
                          
                        }  */}


                        {currentDeal.status === 'PENDING' ? (
                          <button className="bg-[var(--success)] text-white px-4 py-1 rounded">WAITING</button> 
                        ) :currentDeal.status === 'ACCEPTED' ? (
                            <button className="bg-[var(--button-light)] text-[var(--red)] px-4 py-1 rounded" 
                            onClick={() => {setcurrentDealId(currentDeal?._id), setIsBuyerFormOpen(true)} } > PAY</button>
                        ) : (
                         <button className="bg-[var(--success)] text-white px-4 py-1 rounded">VIEW</button> 
                        )}
 

                      
                    </div>
                </div>
              </>
            )
        }
        {/* show current deal */} 
      {isBuyerFormOpen && ( <BuyerPaymentCard id={currentDealId} closeBuyerForm={hideBuyerPaymentCard} />)}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-[99] bg-opacity-50">
              <div className="bg-white w-full max-w-xs mx-auto rounded-xl p-5 relative shadow-lg">
                <div className='flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-light)]'>
                    <h2 className="text-base font-medium text-center tracking-wide"> {dealDetail?.seller?.name}</h2>
                    <button
                       onClick={() => setIsOpen(false)}
                      className="right-3 top-3 bg-gray-100 w-6 h-6 leading-6 flex items-center justify-center text-gray-400 hover:text-black text-base"
                    >
                      ✕
                    </button>
                </div>

                <div className="flex justify-between items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 bg-[var(--button-light)] text-blue-600 font-medium rounded-lg px-3 py-2 text-sm flex-1">
                    <span className='text-[var(--text-color)] font-semibold text-sm'>Pay</span>
                    <span className="text-black text-sm"><span className='text-[var(--link-color)]'>₹</span> {dealDetail?.price * dealDetail?.availableAmount}</span>
                  </div>
                  <img src={ExchangeIcon} />
                  <div className="flex items-center gap-1  bg-[var(--button-light)] text-green-600 font-medium rounded-lg px-3 py-2 text-sm flex-1">
                    <span className='text-[var(--text-color)] font-semibold text-sm mr-2'>Receive</span>
                    <span className="text-black text-sm flex items-center gap-1">{dealDetail?.availableAmount} <img src={UsdtIcon} /></span>
                  </div>
                </div>

                {/* Amount Input */}
                <div className="mb-2">
                  <label className="block text-sm text-gray-600 mb-1">Amount</label>
                  <div className="border-b border-[var(--border-light)] text-base text-black rounded-0">
                    {/* <span className='text-[var(--text-color)]'>₹</span> {amountInINR.toLocaleString()} */}
                  </div>
                </div>

                {/* Converted Amount */}
                <div className="mb-4 mt-4 flex justify-between text-sm text-[var(--text-color)]">
                 <p> {dealDetail.paymentMethods.join(', ')}</p>
                </div>

                <button 
                type="button"
                  className="w-full py-2 mt-6 rounded-lg bg-[var(--bg-color)] text-white font-normal text-base hover:bg-blue-700"
                  onClick={() => {handleDeal(dealDetail._id)}}
                >
                Pick  Deal 
                </button>





              </div>
            </div> 
          </div>
        </div>
      )}
    {
      dealList.length === 0 ? (
          <p></p>
      ) : (dealList.map((deal, index) => (
          <div className=" border-b border-[var(--border-light)] pt-0 px-4 pb-4 relative overflow-hidden" key={index}>  
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <img src={UsdtIcon} className="w-5 h-5 shrink-0" />
                <span className="ml-2 font-medium text-sm text-black">{deal.seller.name}</span>
              </div>
            </div>
            <div className="text-xs text-gray-600 mb-2">Your Deal - #{deal._id}</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-lg font-medium">
                  ₹{deal.price} <span className="text-sm text-gray-500">/USDT</span>
                </div>
                <div className="text-xs text-gray-500">
                  Quantity: ${deal.availableAmount} <br />
                  Payable: {deal.price * deal.availableAmount } ₹
                  <p> {deal.paymentMethods.join(', ')}</p>
                </div>
              </div>
              
              <button
                // onClick={() => setIsOpen(true) ,setDealDetail(deal)}
                onClick={() => showDealDetails(deal)}
                className="bg-[var(--red)] text-white text-sm px-4 py-[6px] rounded"
              >
                Deal
              </button>
              
            </div>
          </div>
          ))
      )}
    </>
  );
};

export default Deal;
