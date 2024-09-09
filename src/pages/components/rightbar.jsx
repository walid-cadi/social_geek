import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FiUsers, FiMessageSquare, FiSettings, FiBell, FiInfo, FiArrowDown, FiArrowDownRight } from 'react-icons/fi';
import { Images } from "../../constant";
import { Link } from 'react-router-dom';
import SuggestPages from './SuggestPages';


export const RightBar = () => {
  return (
    <div className="mt-3 md:block hidden">
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

   <div className='mt-5'>
    <SuggestPages/>
   </div>
   
    <section className='mt-5 event'>
    
   <div class="bg-white shadow-lg rounded-xl p-4 w-80">
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-semibold">Event</h2>
    <a href="#" class="text-blue-600 ">See all</a>
  </div>
  
  <div class="mt-4">
  
    <div class="flex items-center space-x-4 mb-4">
      <div class="bg-green-400 text-white rounded-lg  py-1 px-3  flex flex-col justify-center items-center">
        <span class="text-md font-bold">FEB</span>
        <span class="text-xl font-bold">22</span>
      </div>
      <div>
        <h3 class="text-md font-semibold">Meeting with clients</h3>
        <p class="text-gray-500">41 madison ave, floor 24 new york, NY 10010</p>
      </div>
    </div>
    

    <div class="flex items-center space-x-4 mb-4">
      <div class="bg-orange-500 text-white rounded-lg py-1 px-3 flex flex-col justify-center items-center">
        <span class="text-md font-bold">APR</span>
        <span class="text-xl font-bold">30</span>
      </div>
      <div>
        <h3 class="text-md font-semibold">Developer Programme</h3>
        <p class="text-gray-500">41 madison ave, floor 24 new york, NY 10010</p>
      </div>
    </div>


    <div class="flex items-center space-x-4 mb-4">
      <div class="bg-blue-500 text-white rounded-lg py-1 px-3 flex flex-col justify-center items-center">
        <span class="text-md font-bold">APR</span>
        <span class="text-xl font-bold">23</span>
      </div>
      <div>
        <h3 class="text-md font-semibold">Anniversary Event</h3>
        <p class="text-gray-500">41 madison ave, floor 24 new york, NY 10010</p>
      </div>
    </div>
  </div>
</div>
   </section>

</div>
  
    
  );
};

export default RightBar;
