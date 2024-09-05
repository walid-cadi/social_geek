import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiZap, FiSearch, FiVideo, FiUser, FiShoppingBag, FiBell, FiSettings, FiMessageSquare } from "react-icons/fi";
import { Images } from "../constant";

export const Navbar = () => {
  {/* notification toggle*/}
  const [showNotifications, setShowNotifications] = useState(false);
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="bg-white shadow-md border-0 flex items-center px-5 py-6">
      <div className="flex items-center ps-5 pe-20">
        <a href="/" className="flex items-center text-blue-600">
          <img src={Images.logo} className="w-[25px] pt-1" alt="" />
          <span className="ml-2 font-bold text-2xl">SocialGeek.</span>
        </a>
      </div>
      <form action="#" className="flex items-center pe-10">
        <div className="relative">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Start typing to search..."
            className="bg-gray-100 pl-10 pr-3 py-2 rounded-full w-80"
          />
        </div>
      </form>
      <div className="flex items-center space-x-2 gap-4 pe-72">
        <a href="/" className="text-center bg-blue-100 p-3 rounded-full">
          <FaHome className="text-blue-600 text-2xl" />
        </a>
        <a href="default-storie.html" className="text-center bg-gray-200 p-3 rounded-full">
          <FiZap className="text-gray-500 text-2xl" />
        </a>
        <a href="/" className="text-center bg-gray-200 p-3 rounded-full">
          <FiVideo className="text-gray-500 text-2xl" />
        </a>
        <a href="/" className="text-center bg-gray-200 p-3 rounded-full">
          <FiUser className="text-gray-500 text-2xl" />
        </a>
        <a href="shop-2.html" className="text-center bg-gray-200 p-3 rounded-full">
          <FiShoppingBag className="text-gray-500 text-2xl" />
        </a>
      </div>

      <div className="flex items-center space-x-4 gap-3 relative">
        <a href="#" className="relative text-center" onClick={toggleNotifications}>
          <span className="absolute top-0 right-0 bg-yellow-400 h-2 w-2 rounded-full"></span>
          <FiBell className="text-2xl text-blue-600" />
        </a>

        <a href="#" className="text-center">
          <FiMessageSquare className="text-2xl text-blue-600" />
        </a>

        <div className="relative text-center cursor-pointer">
          <FiSettings className="text-2xl text-blue-600 " />
        </div>

        <a href="default-settings.html" className="text-center">
          <img src={Images.user} alt="user" className="h-10 w-10 rounded-full" />
        </a>

        {/* Notification Dropdown */}
        {showNotifications && (
          <div className="absolute right-48 mt-80 w-80  bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Notification</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <img src={Images.notuser1} alt="user" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">Hendrix Stamp</h4>
                    <p className="text-xs text-gray-500">3 min ago</p>
                    <p className="text-sm">There are many variations of pass...</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={Images.notuser2} alt="user" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">Goria Coast</h4>
                    <p className="text-xs text-gray-500">2 min ago</p>
                    <p className="text-sm">Mobile Apps UI Designer is require...</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={Images.notuser3} alt="user" className="h-10 w-10 rounded-full" />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">Surfilya Zakir</h4>
                    <p className="text-xs text-gray-500">1 min ago</p>
                    <p className="text-sm">Mobile Apps UI Designer is require...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
