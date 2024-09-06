import React, { useEffect, useState } from "react";
import { Images, JsonData } from "../../constant";
import { MyAppContext } from "../../context";

export const Groups = () => {
  const [groupName, setGroupName] = useState("");
  const [groupCover, setGroupCover] = useState();
  const [groups, setGroups] = useState([]);
  const [searchGroup, setSearchGroup] = useState(groups);

  const data = JsonData.users[0];
  //console.log(data);

  //* select image
  const handleImageChange = (e) => {
    setGroupCover(URL.createObjectURL(e.target.files[0]));
  };

  const addGroup = () => {
    if (groupName) {
      const newTab = [...groups];
      let newGroup = {
        grpName: groupName,
        grpCover: groupCover,
        profil: data.Image,
        Fname: data.firstName,
        Lname: data.lastName,
        follow: false,
      };
      newTab.push(newGroup);
      setGroups(newTab);
      data.groups.push(newTab);
      setGroupName("");
      setGroupCover(null);
      console.log(data.groups);
    }
  };

  const follow = (i) => {
    const newTab = [...groups];
    newTab[i].follow = !newTab[i].follow;
    setGroups(newTab);
  };

  const handleSearch = (searchText) => {
    const newTab = [...groups];
    let result = newTab.filter((ele) =>
      ele.name.toLowerCase().includes(searchText)
    );
    if (searchText) {
      setSearchGroup(result);
    } else {
      setSearchGroup(groups);
    }
  };

  return (
    <>
      <div className="w-full  bg-[#f4f5f7] min-h-screen pt-10 flex flex-col items-center  gap-5 ">
        <div className="bg-[white] rounded p-9 w-[70vw] flex items-center justify-between">
          <h1 className="text-2xl font-bold">Groups</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center relative">
              <svg
                className="w-4 h-4 text-blue-900 dark:text-white absolute left-[13vw] focus:outline-none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="gray"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                type="text"
                className="w-[15vw] border-0 border-blue-800 bg-blue-50 text-gray-700 p-3 rounded-lg custom-placeholder"
                placeholder="Search here"
              />
            </div>
            <div>
              {/* Modal toggle */}
              <button
                data-modal-target="static-modal"
                data-modal-toggle="static-modal"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-xl"
                type="button">
                Create Group
              </button>
              {/* Main modal */}
              <div
                id="static-modal"
                data-modal-backdrop="static"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  {/* Modal content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Create Your Group
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="static-modal">
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                      <form class="max-w-md mx-auto">
                        <div class="relative z-0 w-full mb-5 group">
                          <input
                            onChange={(e) => {
                              setGroupName(e.target.value);
                            }}
                            type="text"
                            name="group_name"
                            id="group_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            for="group_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Group Name
                          </label>
                        </div>
                        <div
                          className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
                          id="dropzone">
                          <input
                            onChange={handleImageChange}
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 z-50"
                          />
                          <div className="text-center">
                            <img
                              className="mx-auto h-12 w-12"
                              src="https://www.svgrepo.com/show/357902/image-upload.svg"
                              alt
                            />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer">
                                <span>Choose cover</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  accept="image/*"
                                  className="sr-only"
                                />
                              </label>
                            </h3>
                            <p className="mt-1 text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                          <img
                            src
                            className="mt-4 mx-auto max-h-40 hidden"
                            id="preview"
                          />
                        </div>
                      </form>
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        onClick={addGroup}
                        data-modal-hide="static-modal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create
                      </button>
                      <button
                        data-modal-hide="static-modal"
                        type="button"
                        className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-7 w-[70vw] justify-between">
          {groups &&
            groups.map((e, i) => (
              <>
                <div className="w-[49%]  bg-white shadow-xl rounded-lg text-gray-900">
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                      className="object-cover object-top w-full"
                      src={e.grpCover}
                      alt="Mountain"
                    />
                  </div>
                  <div className="w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-32"
                      src={Images[e.profil]}
                      alt="Woman looking front"
                    />
                  </div>
                  <div className="pb-4 px-2 flex justify-between ">
                    <div>
                      <h1 className="text-lg font-bold">{e.grpName}</h1>
                      <h1 className="text-md font-semibold text-gray-600">
                        {e.Fname} {e.Lname}
                      </h1>
                    </div>
                    <button
                      onClick={() => {
                        follow(i);
                      }}
                      className={` bg-blue-600 w-[130px] px-4 py-2.5 rounded-full ${
                        e.follow
                          ? "text-blue-600 bg-white border-blue-600 border"
                          : "text-white"
                      }`}>
                      {!e.follow ? "Follow" : "unFollow"}
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
