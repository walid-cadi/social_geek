import React from 'react';
import { FiTv, FiAward, FiGlobe, FiZap, FiUser, FiInbox, FiHome, FiMapPin, FiYoutube, FiSettings, FiPieChart, FiMessageSquare } from 'react-icons/fi';

export const SideBar = (props) => {
    return (
        <>
            
            <nav className="w-[20%] h-[85vh] bg-white rounded-2xl shadow-lg p-4 mt-2 ms-5">
      <div className="mb-4">
        <div className="text-gray-500 font-semibold text-xs mb-2">New Feeds</div>
        <ul>
          <li className="flex items-center">
            <a href="default.html" className="flex items-center text-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-1 mb-2">
                <FiTv className="text-white" />
              </span>
              <span className="ml-3">Newsfeed</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-badge.html" className="flex items-center text-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1">
                <FiAward className="text-white" />
              </span>
              <span className="ml-3">Badges</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-storie.html" className="flex items-center text-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full p-1">
                <FiGlobe className="text-white" />
              </span>
              <span className="ml-3">Explore Stories</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-group.html" className="flex items-center text-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-1">
                <FiZap className="text-white" />
              </span>
              <span className="ml-3">Popular Groups</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="user-page.html" className="flex items-center text-gray-700">
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-1">
                <FiUser className="text-white" />
              </span>
              <span className="ml-3">Author Profile</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="text-gray-500 font-semibold text-xs mb-2">More Pages</div>
        <ul>
          <li className="flex items-center mb-3">
            <a href="default-email-box.html" className="flex items-center text-gray-700">
              <FiInbox className="text-blue-500 text-xl" />
              <span className="ml-3">Email Box</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-hotel.html" className="flex items-center text-gray-700">
              <FiHome className="text-blue-500 text-xl" />
              <span className="ml-3">Near Hotel</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-event.html" className="flex items-center text-gray-700">
              <FiMapPin className="text-blue-500 text-xl" />
              <span className="ml-3">Latest Event</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-live-stream.html" className="flex items-center text-gray-700">
              <FiYoutube className="text-blue-500 text-xl" />
              <span className="ml-3">Live Stream</span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="text-gray-500 font-semibold text-xs mb-2">Account</div>
        <ul>
          <li className="flex items-center mb-3">
            <a href="default-settings.html" className="flex items-center text-gray-700">
              <FiSettings className="text-gray-500 text-lg" />
              <span className="ml-3">Settings</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-analytics.html" className="flex items-center text-gray-700">
              <FiPieChart className="text-gray-500 text-lg" />
              <span className="ml-3">Analytics</span>
            </a>
          </li>
          <li className="flex items-center mb-3">
            <a href="default-message.html" className="flex items-center text-gray-700">
              <FiMessageSquare className="text-gray-500 text-lg" />
              <span className="ml-3">Activities</span>
            </a>
          </li>
        </ul>
      </div>
            </nav>
  

        
        </>
        
    );
};

export default SideBar;