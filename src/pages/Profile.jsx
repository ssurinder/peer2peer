import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { t, setLang } from '../components/i18n';
import { FaThumbsUp, FaCrown, FaShareAlt, FaCog } from 'react-icons/fa';
import {getData, postData } from '../api/protectedApi'
const Profile = () => {
    const reviews = new Array(7).fill({
  id: 'P2P-9sff6wo',
  date: '25-05-2025',
});
const [data, setData] = useState(null);
useEffect(() => {
    getData('/user/userProfile',{})
    .then((res) => {setData(res.data.data),console.log('data ' , res.data.data)})
    .catch((err) => console.error(err));
}, []);
  return (
    <div className='max-w-[600px] mx-auto w-full bg-[var(--primary)]'>
    <div className="min-h-screen flex flex-col items-center bg-white text-black font-sans ">  
      <div className='h-[calc(100vh_-_60px)] overflow-auto w-full bg-[var(--primary)] '>
        <Header />
      <div className=' w-full bg-[var(--primary)] rounded-t-xl relative z-[1] pt-3'>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col  w-full">
            <div className='flex w-full items-center justify-between  px-4'>
            <img
              src="https://i.pravatar.cc/100"
              alt="Avatar"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex space-x-4 text-gray-500 text-lg">
            <FaShareAlt className='text-black' />
            <Link to="/Settings">
                 <FaCog className='text-black' />
            </Link>
           
          </div>
          </div>
            <div className='w-full mt-3  px-4'>
              <h2 className="font-semibold text-lg flex items-center gap-1">
              {t('hello')} {data?.data.name}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="verified"
                  className="h-4 w-4"
                />
              </h2>
              <span className="text-xs bg-[#FFF6D5] text-black font-normal px-2 py-1 rounded mt-1 inline-block">
                Professional Crypto Exchange
              </span>
              <div className="text-sm mt-1 flex items-center gap-2">
                <FaCrown className="text-yellow-500" />
                Premium Member · Deposit 5000 USDT
              </div>
            </div>
          </div>
          
        </div>

        {/* Tabs */}
        <div className='w-full block border-b overflow-auto'>
        <div className="mt-6 flex gap-4 text-sm text-gray-600 w-full flex-nowrap ">
          <button className="pb-2 text-nowrap text-base font-semibold ml-3">Info</button>
          <button className="pb-2 text-nowrap text-base font-semibold">Ads (10)</button>
          <button className="pb-2 text-nowrap text-base font-semibold border-b-2 border-blue-500 text-blue-600">
            Feedback (20)
          </button>
          <button className="pb-2 text-nowrap text-base font-semibold">Followers (20)</button>
          <button className="pb-2 text-nowrap text-base font-semibold">Following (5)</button>
        </div>
        </div>

        {/* Stats */}
        <div className='px-4'>
        <div className="my-4 border border-gray-300 rounded-xl p-3 flex items-center justify-center space-x-2 text-sm  ">
          <FaThumbsUp className="text-green-600" />
          <span className="font-medium">55.05%</span>
          <span className="text-gray-500">| (90) Review(s)</span>
        </div></div>

        {/* Filters */}
        <div className="flex space-x-4 text-sm mb-2  px-4">
          <button className="font-normal text-sm px-2 py-1 rounded-md text-black bg-gray-200">All</button>
          <button className="font-normal text-sm px-2 py-1 rounded-md text-gray-500 ">Positives (55)</button>
          <button className="font-normal text-sm px-2 py-1 rounded-md text-gray-500">Negative (10)</button>
        </div>

        {/* Feedback List */}
        <div className="space-y-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded"
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                  P
                </div>
                <div className='flex items-center gap-3'>
                  <p className="font-medium">{review.id}</p>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>
              <FaThumbsUp className="text-green-600" />
            </div>
          ))}
        </div>

      </div>
 </div>
      <Footer />
    </div></div>
  )
}

export default Profile