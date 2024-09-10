import React, { useState } from "react";
import { FaHome, FaToggleOff } from "react-icons/fa";
import {
  FiZap,
  FiSearch,
  FiVideo,
  FiUser,
  FiShoppingBag,
  FiBell,
  FiSettings,
  FiMessageSquare,
  FiGlobe,
  FiMenu,
} from "react-icons/fi";
import { Images } from "../constant";
import { Link } from "react-router-dom";
import { MyAppContext } from "../context";

export const Navbar = () => {
  const { userData } = MyAppContext();
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md border-0 flex items-center justify-between px-5 py-6">
      <div className="flex items-center">
        <Link to="/home" className="flex items-center text-blue-600">
          <img src={Images.logo} className="w-[25px] pt-1" alt="" />
          <span className="ml-2 font-bold text-2xl">SocialGeeks.</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden block text-gray-600 focus:outline-none"
        onClick={toggleMenu}
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Menu for larger screens */}
      <div className="hidden md:flex items-center space-x-4 gap-4">
        <form action="#" className="flex items-center pe-10">
          <div className="relative">
            <FiSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Start typing to search..."
              className="bg-gray-100 pl-10 pr-3 py-2 rounded-full w-80 border-none"
            />
          </div>
        </form>

        <Link to="/home" className="text-center bg-blue-100 p-3 rounded-full">
          <FaHome className="text-blue-600 text-2xl" />
        </Link>
        <Link to="/stories" className="text-center bg-gray-200 p-3 rounded-full">
          <FiZap className="text-gray-500 text-2xl" />
        </Link>
        <Link to="/groups" className="text-center bg-gray-200 p-3 rounded-full">
          <FiGlobe className="text-gray-500 text-2xl" />
        </Link>
        <Link to="/profile" className="text-center bg-gray-200 p-3 rounded-full">
          <FiUser className="text-gray-500 text-2xl" />
        </Link>
        <Link
          to="/market"
          className="text-center bg-gray-200 p-3 rounded-full"
        >
          <FiShoppingBag className="text-gray-500 text-2xl" />
        </Link>
      </div>

    
      <div className="hidden md:flex items-center space-x-4 gap-3 relative">
        <a
          href="#"
          className="relative text-center"
        >
          <span className="absolute top-0 right-0 bg-yellow-400 h-2 w-2 rounded-full"></span>
          <FiBell className="text-2xl text-blue-600" />
        </a>
        <Link to="/" className="text-center">
          <FiMessageSquare className="text-2xl text-blue-600" />
        </Link>
        <Link to="/setting" className="relative text-center cursor-pointer">
          <FiSettings className="text-2xl text-blue-600 " />
        </Link>
        <Link to="/profile" className="text-center">
          <img
            src={userData.profile}
            alt="user"
            className="h-10 w-10 rounded-full"
          />
        </Link>

        {showNotifications && (
          <div className="absolute right-0 mt-12 w-80 bg-white rounded-lg shadow-lg z-10">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <div className="mt-4 space-y-2">
            
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-20 mb-5">
          <div className="flex flex-col items-start space-y-4 p-4 pt-4">
            <Link to="/home" className="flex items-center space-x-2">
              <FaHome className="text-blue-600 text-2xl" />
              <span>Home</span>
            </Link>
            <Link to="/stories" className="flex items-center space-x-2">
              <FiZap className="text-gray-500 text-2xl" />
              <span>Stories</span>
            </Link>
            <Link to="/groups" className="flex items-center space-x-2">
              <FiGlobe className="text-gray-500 text-2xl" />
              <span>Groups</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2">
              <FiUser className="text-gray-500 text-2xl" />
              <span>Profile</span>
            </Link>
            <Link to="/marketplace" className="flex items-center space-x-2">
              <FiShoppingBag className="text-gray-500 text-2xl" />
              <span>Marketplace</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
