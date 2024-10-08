import React from "react";
import { Post } from "../components/post";
import { MyAppContext } from "../../context";

const Profil = () => {
  const { userData } = MyAppContext();

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-3 md:p-10  w-[80vw]">
        <div className="w-[95%] md:ms-1 ms-10 bg-white shadow-xl rounded-lg text-gray-900 pb-5 ">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src={userData.cover}
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-32"
              src={userData.profile || "default-profile-image-url"} // Use a default image if userData.profile is not available
              alt="Profile"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">
              {userData.firstName || "First Name"}
            </h2>
            <p className="text-gray-500">{userData.email || "Email"}</p>
          </div>
          <ul className="flex justify-center pt-3 gap-7">
            <li className="flex flex-col items-center justify-around">
              <h3 className="text-base font-bold">Posts</h3>
              <h6 className="text-base font-bold">
                {userData.post?.length || 0}
              </h6>
            </li>
            <li className="flex flex-col items-center justify-around">
              <h3 className="text-base font-bold">Followers</h3>
              <h6 className="text-base font-bold">
                {userData.followers.length}
              </h6>
            </li>
            <li className="flex flex-col items-center justify-around">
              <h3 className="text-base font-bold">Following</h3>
              <h6 className="text-base font-bold">{userData.follows.length}</h6>
            </li>
          </ul>
        </div>

        
        <div className="flex w-[100%]">
          <div className="w-[32%] h-[50vh] border shadow-lg rounded-xl mx-2 bg-white mt-3 hidden md:block">
            <div className="p-4 ">
              <h4 className="font-bold mb-3 text-sm text-gray-900">Bio</h4>
              <p className="font-medium text-gray-500 leading-6 text-xs mb-0">
                {userData.bio ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus."}
              </p>
            </div>
            <div className="border-t flex items-center p-4">
              <i className="feather-lock text-gray-500 mr-3 text-lg"></i>
              <h4 className="font-bold text-gray-900 text-xs mt-0">
                Private
                <span className="block text-xs font-medium mt-1 leading-3 text-gray-500">
                  What's up, how are you?
                </span>
              </h4>
            </div>
            <div className="flex items-center pt-0 p-4">
              <i className="feather-eye text-gray-500 mr-3 text-lg"></i>
              <h4 className="font-bold text-gray-900 text-xs mt-0">
                Visible
                <span className="block text-xs font-medium mt-1 leading-3 text-gray-500">
                  Anyone can find you
                </span>
              </h4>
            </div>
            <div className="flex items-center pt-0 p-4">
              <i className="feather-map-pin text-gray-500 mr-3 text-lg"></i>
              <h4 className="font-bold text-gray-900 text-xs mt-1">
                Flodia, Austria
              </h4>
            </div>
            <div className="flex items-center pt-0 p-4">
              <i className="feather-users text-gray-500 mr-3 text-lg"></i>
              <h4 className="font-bold text-gray-900 text-xs mt-1">
                General Group
              </h4>
            </div>
          </div>
          <div>
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
