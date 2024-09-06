import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FiUsers, FiMessageSquare, FiSettings, FiBell, FiInfo, FiArrowDown, FiArrowDownRight } from 'react-icons/fi';
import { Images } from "../../constant";
import { Link } from 'react-router-dom';


export const RightBar = () => {
  return (
    <div className="bg-gray-100 mt-3">
  <div className=" mx-auto  flex  items-center">
    <div className="w-[320px] rounded-lg flex flex-col gap-3 py-2 border bg-white dark:border-gray-500 dark:bg-gray-800">
      <div className="flex items-center justify-between p-4 dark:text-white">
        <h4>Friends Request</h4>
        <FiInfo className='text-gray-500'/>
      </div>
      <div className="w-full flex ps-5 gap-2 px-2">
        <img src={Images.notuser2} alt="User profile" className="w-[3.4rem] h-[3.4rem] rounded-full" />
        <div className="flex flex-col">
          <h4 className="text-md text-gray-800 font-semibold dark:text-gray-200">Ethiopian Airlines</h4>
          <h6 className="text-sm text-gray-400 dark:text-gray-400">Airlines and Aviation</h6>
          {/* follow Button */}
          <div className="w-fit  flex justify-center items-center bg-blue-600 my-2 py-1 px-5 rounded-full dark:border-gray-200 dark:text-white">
            <h5 className="text-white">Follow</h5>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 ps-5 px-2">
        <img src={Images.notuser1} alt="User profile" className="w-[3.4rem] h-[3.4rem] rounded-full" />
        <div className="flex flex-col">
          <h4 className="text-md text-gray-800 font-semibold dark:text-gray-200">Eyasu Abera</h4>
          <h6 className="text-sm text-gray-400 dark:text-gray-400">System Administrator</h6>
          {/* follow Button */}
          <div className="w-fit  flex justify-center items-center  bg-blue-600 my-2 py-1 px-5 rounded-full dark:border-gray-200 dark:text-white">
            <i className="fa fa-lock" aria-hidden="true" />
            <h5 className="text-white">Follow</h5>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 ps-5 px-2">
        <img src={Images.notuser3} alt="User profile" className="w-[3.4rem] h-[3.4rem] rounded-full" />
        <div className="flex flex-col">
          <h4 className="text-md text-gray-800 font-semibold dark:text-gray-200">Google</h4>
          <h6 className="text-sm text-gray-400 dark:text-gray-400">Software Development</h6>
          {/* follow Button */}
          <div className="w-fit  flex justify-center items-center  bg-blue-600 my-2 py-1 px-5 rounded-full dark:border-gray-200 dark:text-white">
            <i className="fa fa-lock" aria-hidden="true" />
            <h5 className="text-white">Follow</h5>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-1 px-4 pb-2 justify-between items-center">
        <Link to="/friend_request">
        <h6 className="text-md text-gray-700  dark:text-gray-400">View all</h6>
        </Link>
        <FaArrowRight className='text-gray-600'/>
      </div>
    </div>
  </div>    
</div>

    
  );
};

export default RightBar;
