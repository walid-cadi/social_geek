import React from 'react';
import { FiTv, FiAward, FiGlobe, FiZap, FiUser, FiInbox, FiHome, FiMapPin, FiYoutube, FiSettings, FiPieChart, FiMessageSquare, FiShoppingBag, FiUsers, FiUserPlus, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../src/style/homePage.css'


export const SideBar = () => {

  return (
    <>
      <nav className=" md:block w-[20%] h-[85vh] p-4 mt-2 ms-3 flex flex-col gap-2 hidden ">
        <div className="mb-4 shadow-md p-5 rounded-lg transition-all hover:shadow-md">
          <div className="text-gray-500 font-semibold text-xs mb-2">New Feeds</div>
          <ul>
            <li className="flex items-center">
              <Link to="/home" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <span className="flex items-center justify-center w-[3vw] h-[6vh] bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-1 mb-2 transition-transform hover:scale-110">
                  <FiHome className="text-white " />
                </span>
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/marketplace" className="flex items-center text-gray-700 hover:text-orange-500 transition-all">
                <span className="flex items-center justify-center w-[3vw] h-[6vh]  bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1 transition-transform hover:scale-110">
                  <FiShoppingBag className="text-white" />
                </span>
                <span className="ml-3">Market Place</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/stories" className="flex items-center text-gray-700 hover:text-yellow-500 transition-all">
                <span className="flex items-center justify-center w-[3vw] h-[6vh]  bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full p-1 transition-transform hover:scale-110">
                  <FiZap className="text-white" />
                </span>
                <span className="ml-3">Explore Stories</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/groups" className="flex items-center text-gray-700 hover:text-pink-500 transition-all">
                <span className="flex items-center justify-center w-[3vw] h-[6vh]  bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-1 transition-transform hover:scale-110">
                  <FiGlobe className="text-white" />
                </span>
                <span className="ml-3">Groups</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/profile" className="flex items-center text-gray-700 hover:text-blue-400 transition-all">
                <span className="flex items-center justify-center w-[3vw] h-[6vh]  bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-1 transition-transform hover:scale-110">
                  <FiUser className="text-white" />
                </span>
                <span className="ml-3">Author Profile</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-4 shadow-md p-5 rounded-lg transition-all hover:shadow-md">
          <div className="text-gray-500 font-semibold text-xs mb-2">More Pages</div>
          <ul>
            <li className="flex items-center mb-3">
              <Link to="/email-box" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiInbox className="text-blue-500 text-2xl transition-transform hover:scale-110" />
                <span className="ml-3">Email Box</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/friend_request" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiUserPlus className="text-blue-500 text-2xl transition-transform hover:scale-110" />
                <span className="ml-3">Friends Request</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/latest-event" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiMapPin className="text-blue-500 pe-1 text-2xl transition-transform hover:scale-110" />
                <span className="ml-3">Latest Event</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/live-stream" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiYoutube className="text-blue-500 text-2xl transition-transform hover:scale-110" />
                <span className="ml-3">Live Stream</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="shadow-md p-5 rounded-lg transition-all hover:shadow-md">
          <div className="text-gray-500 font-semibold text-xs mb-2">Account</div>
          <ul>
            <li className="flex items-center mb-3">
              <Link to="/setting" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiSettings className="text-gray-500 text-xl transition-transform hover:scale-110 " />
                <span className="ml-3">Settings</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/analytics" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiPieChart className="text-gray-500 text-xl transition-transform hover:scale-110" />
                <span className="ml-3">Analytics</span>
              </Link>
            </li>
            <li className="flex items-center mb-3">
              <Link to="/logout" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
                <FiLogOut className="text-gray-500 text-xl transition-transform hover:scale-110" />
                <button><span className="ml-3">Log out</span></button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default SideBar;
