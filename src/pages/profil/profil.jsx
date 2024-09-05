import React from "react";

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
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">ccccccccc</h2>
            <p className="text-gray-500">mr.zakaria@salami.com</p>
          </div>
          <ul className="flex justify-center pt-3 gap-7">
            <li className="flex flex-col items-center justify-around">
              <h3 className="text-base font-bold">Posts</h3>
              <h6 className="text-base font-bold">4</h6>
            </li>
            <li className="flex flex-col items-center justify-between">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <div>10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <div>15</div>
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
