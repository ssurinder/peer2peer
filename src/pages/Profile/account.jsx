
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getData , postData } from '../../api/protectedApi';
import {  validateSponser } from "../../api/api";

import { ToastContainer,toast } from 'react-toastify';

export default function account() {
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(0);
    const [activationList, setActivationList] = useState(0);

    const activationTransactions = () => {
        getData('/user/walletHistory', {limit : 10 , page:1}) .then((res) => { setActivationList(res.data.data , console.log(' aaa ' , res.data))}) .catch((err) => console.error(err));
    }

    useEffect(() => {
        activationTransactions()
        getData('/user/userBalance?type=WALLET', {}) .then((res) => { setBalance(res.data?.data , console.log(' aaa ' , res.data))}) .catch((err) => console.error(err));
        
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId.trim()) {
            setError('User ID is required.');
        } else { 
             try{
                     const res = await postData('/user/activateAccount', {userId:userId});
                         if(res.data.success == true)
                            toast.success(res.data.message)
                          else
                            setError(res.data.message)
                          // .then((res) => { 
                          //    console.log('data ', res) 
                          
                          //   })
                          // .catch((err) => toast.error(err));
                    }catch(e){
                     toast.error(e.message);
                    }
                     
        }
    };

    const checkUser = async () => {
        let response = await validateSponser(userId)
            if (response.success == false) {
            toast.error(response.message);
            setUserId('')
        }else{
            setError(response.data.name)
            toast.success(response.message);  
        }
    }
    return (

        <div className='max-w-[600px] mx-auto w-full bg-[var(--primary)]'>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="min-h-screen flex flex-col items-center bg-white text-black ">
                <div className='h-[calc(100vh_-_56px)] overflow-auto w-full bg-[var(--primary)] '>
                    <Header />
                    <div className='w-full bg-[var(--primary)] rounded-t-xl relative z-[1]'>
                        <div className='w-full pt-3'>
                            <div className=" items-center justify-center align-items-center mt-auto ">
                                <div className="bg-white p-6 mx-4 mt-10 rounded-xl shadow-lg">
                                    <h2 className="text-xl font-bold mb-2">
                                       Balance:
                                        <span className="text-green-600 text-sm ml-2">
                                         ₹{balance.toFixed(2)}
                                        </span>
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                        <label htmlFor="userId" className="block text-gray-700 font-medium mb-1">
                                            User ID
                                        </label>
                                        <input
                                            id="userId"
                                            type="text"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                            onBlur={checkUser}
                                            placeholder="Enter your user ID"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                                        </div>

                                        <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all"
                                        >
                                        Submit
                                        </button>
                                    </form>
                                </div>
                                {activationList.length === 0 ? (
                                    <p>No deals found.</p>
                                ) : (
                                    // activationList.length;
                                    activationList.data?.map((activity, index) => (

                                     <div key={index} className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                        <span
                                            className={`text-xl font-bold ${
                                            activity.amount < 0 ? 'text-red-600' : 'text-green-600'
                                            }`}
                                        >
                                            {activity.amount} {activity.token}
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-md text-sm font-semibold ${
                                            activity.transactionType === 'DEPOSIT'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                            }`}
                                        >
                                            {activity.transactionType.replace('_', ' ')}
                                        </span>
                                        </div>
                                        {/* <div className="text-sm text-gray-500">{formatDate(tx.date)}</div> */}
                                        {/* <div className="border rounded-md px-3 py-1 font-mono text-sm">{tx.txId}</div> */}
                                    </div>


                                    //    <div key={index} className="flex items-center justify-between p-4 border rounded-md shadow-sm bg-white max-w-xl mx-auto">
                                    //         <div>
                                    //             <p className="text-2xl font-semibold text-black mt-1">
                                    //             {activity.amount} <span className="text-sm font-normal text-gray-500">USDT</span>
                                    //             </p> 
                                    //             <p className="text-2xl font-semibold text-black mt-1">
                                    //            {activity.createdAt}
                                    //             </p> 
                                    //         </div>
                                    //          <div className="flex flex-col space-y-2">
                                    //             <button className="bg-gray-100 text-red-600 font-medium px-4 py-2 rounded-md hover:bg-red-100">
                                    //             {activity.transactionType}
                                    //             </button>
                                    //             <button className="border border-black text-black font-medium px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
                                    //             WRSDSF
                                    //             </button>
                                    //         </div> 
                                    //     </div>

                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}
