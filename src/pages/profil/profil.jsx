import React from "react";
import { BsCardImage } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiMessageCircle, FiTwitter, FiUsers } from "react-icons/fi";
import { MyAppContext } from "../../context";

const Profil = () => {

  const  {userData} = MyAppContext() 

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
              alt="Woman looking front"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">{userData.firstName}</h2>
            <p className="text-gray-500">{userData.email}</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.
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
          <div class="w-[60%]  h-screen  dark:bg-gray-900">
            <div class=" pt-3 flex ">
              <div class="w-full flex flex-col gap-1 p-2 border shadow-lg rounded-xl mx-2 bg-white dark:border-gray-400 dark:bg-gray-800">
                <div class="flex items-center gap-2 pt-2">
                  <img
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="User profile"
                    class="w-[3.5rem] h-[3.5rem] rounded-full"
                  />
                  <textarea
                    rows="1"
                    class="w-full resize-none truncate border border-gray-400 rounded-full p-[12px] text-left xs:text-sm sm:text-lg  dark:bg-gray-700 dark:text-white dark:border-gray-500"
                    placeholder="Start a post, try writing with AI"
                  ></textarea>
                </div>

                <div class="flex justify-between">
                  <div class="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined text-blue-400">
                      panorama
                    </span>
                    <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Media
                    </h3>
                  </div>

                  <div class="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined text-yellow-700">
                      calendar_month
                    </span>
                    <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Event
                    </h3>
                  </div>

                  <div class="flex items-center gap-2 sm:p-2 xs:p-1 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined text-orange-400">
                      newsmode
                    </span>
                    <h3 class="text-sm sm:font-semibold xs:truncate text-gray-600 dark:text-gray-300">
                      Write article
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
