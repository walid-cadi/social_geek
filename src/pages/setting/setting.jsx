import React, { useState } from 'react';

const Setting = () => {
  

return (
    <>
      <form className="w-[80vw] flex pl-7 pt-6 bg-white" >
        <div className="flex flex-col gap-1 rounded-xl mx-2">
          <h1 className="text-xl font-bold">User settings</h1>
          <p className="text-sm text-gray-400">
            Update your profile and personal details here
          </p>
          <h3 className="font-semibold pt-8">Profile</h3>
          <h3 className="pt-4 font-medium">Avatar</h3>
          <div className="sm:col-span-6 pt-2">
            <div className="mt-1 flex items-center">
              <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <div className="flex flex-col align-center gap-1">
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 w-[30%] rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
                <p className="text-xs text-gray-400 pl-[20px]">
                  For best results, upload an image 512x512 or larger.
                </p>
              </div>
            </div>
          </div>
          <div className="flex pt-5 gap-x-16 flex-col">
            <div className="flex gap-x-14">
              <label className="block" htmlFor="firstname">
                <p className="text-xs font-medium">First name</p>
                <input
                  className="rounded-md border pl-[11px] py-[4px] bg-white w-[120%] mt-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter your name"
                  name="firstname"
                />
              </label>
              <label className="block" htmlFor="lastname">
                <p className="text-xs font-medium">Last name</p>
                <input
                  name="lastname"
                  className="rounded-md border bg-white pl-[11px] py-[4px] pt-0.5 w-[120%] mt-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
            </div>
            <div className="pt-5">
              <label className="block" htmlFor="bio">
                <p className="text-xs font-medium">Bio</p>
                <textarea
                  name="bio"
                  className="h-32 w-[110%] rounded-md border mt-2 bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </label>
              <button
                type="submit"
                className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800"
              >
                Save All
              </button>
            </div>
          </div>
          <form className='pt-10' >
            <h1 >Password</h1>
            <label  className="block pt-5" htmlFor="firstname">
                <p className="text-xs font-medium">Current password</p>
                <input
                  className="rounded-md border pl-[11px] py-[4px] bg-white w-[120%] mt-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter your name"
                  name="currentPassword"
                />
              </label>
              <label  className="block pt-5" htmlFor="firstname">
                <p className="text-xs font-medium">New password</p>
                <input
                  className="rounded-md border pl-[11px] py-[4px] bg-white w-[120%] mt-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  placeholder="Enter your name"
                  name="newPassword"
                />
              </label>
              <button
                type="submit"
                className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800 mt-5"
              >
                change password
              </button>
          </form>
        </div>
      </form>
    </>
  );
};

export default Setting;
