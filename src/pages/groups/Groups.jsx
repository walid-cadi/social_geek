import React, { useContext, useState } from "react";
import { MyAppContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const Groups = () => {
  const [groupName, setGroupName] = useState("");
  const [groupCover, setGroupCover] = useState();
  const { groups, setGroups } = MyAppContext();
  const { userData } = MyAppContext();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setGroupCover(URL.createObjectURL(e.target.files[0]));
  };

  const addGroup = () => {
    if (groupName) {
      const newTab = [...groups];
      const newGroup = {
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
      setGroupName("");
      setGroupCover(null);
      setShowModal(false);
    }
  };

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
      userData.groups = userData.groups.filter(
        (e) => e.grpName !== newTab[i].grpName
      );
      newTab[i].members = newTab[i].members.filter(
        (member) => member.email !== userData.email
      );
    }
  };

  return (
    <>
      <div className="w-[90vw] lg:w-[80vw] mt-5 min-h-screen pt-10 flex flex-col items-center gap-5">
        <div className="bg-gray-100 rounded p-5 lg:p-9 w-full lg:w-[70vw] flex items-center justify-between ms-7">
          <h1 className="text-xl lg:text-2xl font-bold">Groups</h1>
          <div className="flex items-center gap-2">
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-3 py-2.5 lg:px-4 lg:py-2.5 rounded-xl"
                type="button">
                Create Group
              </button>

              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto bg-gray-500 bg-opacity-75">
                  <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
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
                    <div className="mt-4">
                      <form className="space-y-4">
                        <div className="relative z-0 w-full mb-5 group">
                          <input
                            onChange={(e) => {
                              setGroupName(e.target.value);
                            }}
                            type="text"
                            name="group_name"
                            id="group_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            htmlFor="group_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Group Name
                          </label>
                        </div>
                        <div
                          className="w-full lg:w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
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
                              alt="Upload"
                            />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                              <label htmlFor="file-upload" className="relative cursor-pointer">
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
                          {groupCover && (
                            <img
                              src={groupCover}
                              className="mt-4 mx-auto max-h-40"
                              alt="Group Cover Preview"
                            />
                          )}
                        </div>
                      </form>
                    </div>
                    <div className="flex justify-end pt-4 border-t">
                      <button
                        onClick={addGroup}
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
        <div className="flex flex-wrap gap-y-7 w-full lg:w-[70vw] justify-between ms-6 ">
          {groups &&
            groups.map((e, i) => (
              <div
                key={i}
                className="w-full lg:w-[49%] bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                  <img
                    className="object-cover object-top w-full"
                    src={e.grpCover}
                    alt="Group Cover"
                  />
                </div>
                <div className="w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden mx-auto lg:mx-0">
                  <img
                    className="object-cover object-center h-32"
                    src={e.profil}
                    alt="Profile"
                  />
                </div>
                <div className="pb-4 px-2 flex justify-between">
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
                          state: { isadmin: e.admin === userData.email },
                        });
                      }}
                      className="bg-blue-600 text-white w-[130px] px-4 py-2.5 rounded-full">
                      Enter
                    </button>
                    {e.admin !== userData.email && (
                      <button
                        onClick={() => follow(i)}
                        className={`bg-blue-600 w-[130px] px-4 py-2.5 rounded-full ${
                          e.follow
                            ? "text-blue-600 bg-white border-blue-600 border"
                            : "text-white"
                        }`}>
                        {!e.follow ? "Follow" : "Unfollow"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
