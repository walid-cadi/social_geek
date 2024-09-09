import React from 'react';
import { FiTv, FiAward, FiGlobe, FiZap, FiUser, FiInbox, FiHome, FiMapPin, FiYoutube, FiSettings, FiPieChart, FiMessageSquare, FiShoppingBag, FiUsers, FiUserPlus } from 'react-icons/fi';
import { LuLogOut } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import {MyAppContext} from "../context/index"
export const SideBar = (props) => {
    const navigate=useNavigate()
    const {setUserData}=MyAppContext()
    const handleLogout = () => {
        setUserData(null);
        navigate('/login'); 
    };
    return (
        <>
            <nav className="w-[20%] h-[85vh] bg-white rounded-2xl shadow-lg p-4 mt-2 ms-5 ">
                <div className="mb-4">
                    <div className="text-gray-500 font-semibold text-xs mb-2">New Feeds</div>
                    <ul>
                        <li className="flex items-center">
                            <Link to="/home" className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-1 mb-2">
                                    <FiHome className="text-white" />
                                </span>
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/marketplace" className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1">
                                    <FiShoppingBag className="text-white" />
                                </span>
                                <span className="ml-3">Market Place</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/stories" className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full p-1">
                                    <FiZap className="text-white" />
                                </span>
                                <span className="ml-3">Explore Stories</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/groups" className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-1">
                                    <FiGlobe className="text-white" />
                                </span>
                                <span className="ml-3">Groups</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/profile" className="flex items-center text-gray-700">
                                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-1">
                                    <FiUser className="text-white" />
                                </span>
                                <span className="ml-3">Author Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mb-4">
                    <div className="text-gray-500 font-semibold text-xs mb-2">More Pages</div>
                    <ul>
                        <li className="flex items-center mb-3">
                            <Link to="/email-box" className="flex items-center text-gray-700">
                                <FiInbox className="text-blue-500 text-xl" />
                                <span className="ml-3">Email Box</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/friend_request" className="flex items-center text-gray-700">
                                <FiUserPlus className="text-blue-500 text-xl" />
                                <span className="ml-3">Friends Request</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/latest-event" className="flex items-center text-gray-700">
                                <FiMapPin className="text-blue-500 text-xl" />
                                <span className="ml-3">Latest Event</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/live-stream" className="flex items-center text-gray-700">
                                <FiYoutube className="text-blue-500 text-xl" />
                                <span className="ml-3">Live Stream</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="text-gray-500 font-semibold text-xs mb-2">Account</div>
                    <ul>
                        <li className="flex items-center mb-3">
                            <Link to="/setting" className="flex items-center text-gray-700">
                                <FiSettings className="text-gray-500 text-lg" />
                                <span className="ml-3">Settings</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/analytics" className="flex items-center text-gray-700">
                                <FiPieChart className="text-gray-500 text-lg" />
                                <span className="ml-3">Analytics</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                            <Link to="/activities" className="flex items-center text-gray-700">
                                <FiMessageSquare className="text-gray-500 text-lg" />
                                <span className="ml-3">Activities</span>
                            </Link>
                        </li>
                        <li className="flex items-center mb-3">
                        <button onClick={handleLogout} className="flex items-center text-gray-700">
                            <LuLogOut className="text-gray-500 text-lg" />
                            <span className="ml-3">Logout</span>
                        </button>
                    </li>
                    </ul>
                </div>
            
            </nav>
        </>
    );
};

export default SideBar;
