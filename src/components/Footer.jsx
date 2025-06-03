

import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FiList, FiSpeaker, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="sticky w-full bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-sm z-10">
        <Link to="/dahboard" className="flex flex-col items-center text-blue-500">
          <FaUserFriends size={20} />
          <span>P2P</span>
        </Link>
        <div className="flex flex-col items-center text-gray-400">
          <FiList size={20} />
          <span>Orders</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <FiSpeaker size={20} />
          <span>Ad</span>
        </div>
        <Link to="/profile" className="flex flex-col items-center text-gray-400">
          <FiUser size={20} />
          <span>Profile</span>
        </Link>
      </div>
  )
}

export default Footer