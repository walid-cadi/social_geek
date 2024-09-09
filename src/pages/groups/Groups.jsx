import React, { useContext, useEffect, useState } from "react";
import { Images, JsonData } from "../../constant";
import { MyAppContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const Groups = () => {
  const [groupName, setGroupName] = useState("");
  const [groupCover, setGroupCover] = useState();
  //const [groups, setGroups] = useState([]);
  const { groups, setGroups } = MyAppContext();
  const { userData, setUserData } = MyAppContext();
  const [searchGroup, setSearchGroup] = useState(groups);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  //const data = JsonData.users[0];
  //console.log(data);

  //* select image
  const handleImageChange = (e) => {
    setGroupCover(URL.createObjectURL(e.target.files[0]));
  };

  //* create group
  const addGroup = () => {
    if (groupName) {
      const newTab = [...groups];
      let newGroup = {
        grpName: groupName,
        grpCover: groupCover,
        profil: userData.profile,
        Fname: userData.firstName,
        Lname: userData.lastName,
        admin: userData.email,
        follow: false,
        posts: [],
        members: [],
      };
      newTab.push(newGroup);
      setGroups(newTab);
      userData.groups.push(newGroup);
      console.log(userData);
      setGroupName("");
      setGroupCover(null);
      setShowModal(false);
    }
  };

  //* follow group
  const follow = (i) => {
    const newTab = [...groups];
    newTab[i].follow = !newTab[i].follow;
    setGroups(newTab);
    if (newTab[i].follow) {
      userData.groups.push(newTab[i]);
      newTab[i].members.push({
        email: userData.email,
        profile: userData.profile,
        firstName: userData.firstName,
        lastName: userData.lastName,
      });
    } else {
      userData.groups.filter((e) => e.grpName != newTab[i].grpName);
      newTab[i].members = newTab[i].members.filter(
        (member) => member.email != userData.email
      );
    }
    console.log(userData);
  };

  const handleSearch = (searchText) => {
    const newTab = [...groups];
    let result = newTab.filter((ele) =>
      ele.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText) {
      setSearchGroup(result);
    } else {
      setSearchGroup(groups);
    }
  };

  return (
    <>
      <div className="w-[95%] bg-[#f4f5f7] min-h-screen pt-10 flex flex-col items-center  gap-5 ">
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
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-4 py-2.5 rounded-xl"
                type="button">
                Create Group
              </button>

              {/* Simple Modal */}
              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-gray-500 bg-opacity-75">
                  <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                    {/* Modal header */}
                    <div className="flex items-center justify-between pb-4 border-b">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Create Your Group
                      </h3>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
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
                    <div className="mt-4">
                      <form className="space-y-4">
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
                    <div className="flex justify-end pt-4 border-t">
                      <button
                        onClick={() => {
                          addGroup();
                        }}
                        className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Create
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 ml-3 text-gray-900 bg-white border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* groups */}
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
                      src={e.profil}
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

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          navigate(`/group/${e.grpName}`, {
                            state: { isadmin: e.admin == userData.email },
                          });
                        }}
                        className="bg-blue-600 text-white w-[130px] px-4 py-2.5 rounded-full">
                        Enter
                      </button>
                      {e.admin != userData.email && (
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
                    )}
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};
