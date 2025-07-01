
import React, { useState , useEffect } from 'react';

import { getData } from '../../api/protectedApi';

const MyAds = () => { 
    const [Deals, setDeals] = useState([]);
     useEffect(() => {
          getData('/user/myDeals', {}) .then((res) => { setDeals(res.data)}) .catch((err) => console.error(err));
        }, []);
    return <>
            <div className="p-4 space-y-4">
            {Deals.length === 0 ? (
                <p>No deals found.</p>
            ) : (
                Deals.data.deals.map((deal, index) => (
                    <div className="flex items-center justify-between p-4 border rounded-md shadow-sm bg-white max-w-xl mx-auto">
                        <div>
                            <p className="text-sm text-gray-500">
                            {/* Trade(s) <span className="font-medium text-gray-700">1824</span> (<span className="text-gray-600">89.40%</span>) */}
                            </p>
                            <p className="text-2xl font-semibold text-black mt-1">
                            ₹ {deal.price} <span className="text-sm font-normal text-gray-500">/USDT</span>
                            </p>
                            <p className="text-purple-600 underline mt-2">
                            Quantity {deal.availableAmount} USDT
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                            Payable ₹ {deal.availableAmount * deal.price}
                            </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <button className="bg-gray-100 text-red-600 font-medium px-4 py-2 rounded-md hover:bg-red-100">
                            Delete
                            </button>
                            <button className="border border-black text-black font-medium px-4 py-2 rounded-md hover:bg-black hover:text-white transition">
                            Active
                            </button>
                        </div>
                    </div>
                ))
            )}
            </div>
        </>
}


export default MyAds;