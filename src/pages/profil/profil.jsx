import React from "react";
import Post from "../components/post";

const Profil = () => {
 
 
return (
    <>
      <div className="p-10">
        <div className="w-[95%]  bg-white shadow-xl rounded-lg text-gray-900">
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
              src={user.avatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"}
              alt="profil"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">zakaria</h2>
            <p className="text-gray-500">mr.zakariasalami@gmail.com</p>
          </div>
          <ul className="flex justify-center pt-3 gap-7">
            <li className="flex flex-col items-center justify-around">
              <h3 className="text-base font-bold">Posts</h3>
              <h6 className="text-base font-bold">4</h6>
            </li>
            <li className="flex flex-col items-center justify-between">
            <h3 className="text-base font-bold">Followers</h3>
              <div>10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
            <h3 className="text-base font-bold">Following</h3>
              <div>15</div>
            </li>
          </ul>
        </div>
        <div className="flex w-[100%] ">
          <div class="w-[32%]  h-[70vh] border shadow-lg rounded-xl mx-2 bg-white  mt-3 ">
            <div class="p-4">
              <h4 class="font-bold mb-3 text-sm text-gray-900">Bio</h4>
              <p class="font-medium text-gray-500 leading-6 text-xs mb-0">
                {user.bio}
              </p>
            </div>
            <div class="border-t flex items-center p-4">
              <i class="feather-lock text-gray-500 mr-3 text-lg"></i>
              <h4 class="font-bold text-gray-900 text-xs mt-0">
                Private
                <span class="block text-xs font-medium mt-1 leading-3 text-gray-500">
                  What's up, how are you?
                </span>
              </h4>
            </div>
            <div class="flex items-center pt-0 p-4">
              <i class="feather-eye text-gray-500 mr-3 text-lg"></i>
              <h4 class="font-bold text-gray-900 text-xs mt-0">
                Visible
                <span class="block text-xs font-medium mt-1 leading-3 text-gray-500">
                  Anyone can find you
                </span>
              </h4>
            </div>
            <div class="flex items-center pt-0 p-4">
              <i class="feather-map-pin text-gray-500 mr-3 text-lg"></i>
              <h4 class="font-bold text-gray-900 text-xs mt-1">
                Flodia, Austria
              </h4>
            </div>
            <div class="flex items-center pt-0 p-4">
              <i class="feather-users text-gray-500 mr-3 text-lg"></i>
              <h4 class="font-bold text-gray-900 text-xs mt-1">
                General Group
              </h4>
            </div>
          </div>
    
          <div >
          <Post  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
