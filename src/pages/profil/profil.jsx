import React from "react";
import {Post} from "../components/post"
import { BsCardImage } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiMessageCircle, FiTwitter, FiUsers } from "react-icons/fi";

const Profil = () => {
 
 
return (
    <>
      <div className="p-10">
        <div className="w-[95%]  bg-white shadow-xl rounded-lg text-gray-900 pb-5">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="profil"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">user</h2>
            <p className="text-gray-500">mr.zakaria@salami.com</p>
          </div>
          <ul className="flex justify-center pt-3 gap-7">
            <li className="flex flex-col items-center justify-around">
              <BsCardImage className=" font-bold text-blue-600 text-xl" />
              <h6 className="text-base  text-gray-600">4</h6>
            </li>
            <li className="flex flex-col items-center justify-between">
              <FiUsers className="text-blue-600 text-xl"/>
              <div className="text-gray-600">10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
            <FiMessageCircle className="text-blue-600 text-xl "/>
              <div className="text-gray-600">15</div>
            </li>
          </ul>
        </div>
        <div className="flex w-[100%] ">
          <div class="w-[32%]  h-[70vh] border shadow-lg rounded-xl mx-2 bg-white  mt-3 ">
            <div class="p-4">
              <h4 class="font-bold mb-3 text-sm text-gray-900">Bio</h4>
              <p class="font-medium text-gray-500 leading-6 text-xs mb-0">
               ggggggggggggggggggggggg
              </p>
            </div>
            <div class="border-t  p-4 ps-5">
               <h6 className="font-semibold font-serif pb-4">contact info</h6>
               <div className="flex gap-2 items-center">
                <FaInstagram className="text-fuchsia-950 text-lg" />
                 <h6>@user_ii</h6>
                </div>
                <div className="flex gap-2 items-center pt-3">
                <FiTwitter className="text-blue-600 text-lg" />
                 <h6>@user_twit</h6>
                </div>
                <div className="flex gap-2 items-center pt-3">
                <FiLinkedin className="text-blue-600 text-lg" />
                 <h6>@user_link</h6>
                </div>
            </div>

            
          </div>
    
          <div >
          <Post/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
