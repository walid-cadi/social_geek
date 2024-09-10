import React, { useState, useEffect } from "react";
import { MyAppContext } from "../../context";
import "../../style/friend-request.css";
const Friend_request = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [friend, setFriend] = useState({});

  const { dataProfile, setDataProfile, userData, setUserData } = MyAppContext();

  // console.log("ssssss",dataProfile);

  useEffect(() => {
    const getWeatherData = async () => {
      const response = await fetch("https://randomuser.me/api/?results=16");
      const result = await response.json();
      setData(result.results);
    };

    getWeatherData();
  }, []);

  const filter = data.filter((user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase())
  );

  const addFriends = (id) => {
    setFriend((change) => ({ ...change, [id]: !change[id] }));
    if (friend[id]) {
      setUserData((user) => ({
        ...user,
        follows: user.follows.filter((follower) => follower !== id),
      }));
    } else {
      setUserData((user) => ({
        ...user,
        follows: [...user.follows, id],
      }));
    }
    console.log(userData);
  };

  const addFriend = (chlay) => {
    const userunique = userData.follows.find((e) => e.email === chlay.email);

    const updatedFollows = !userunique
      ? [...userData.follows, chlay]
      : userData.follows.filter((e) => e.email !== chlay.email);

    setUserData({
      ...userData,
      follows: updatedFollows,
    });

    const updatedFollowers = !userunique
      ? [...chlay.followers, userData]
      : chlay.followers.filter((f) => f.email !== userData.email);

    updateProfileFollowers(chlay.email, updatedFollowers);
  };
  const updateProfileFollowers = (email, updatedFollowers) => {
    setDataProfile((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.email === email
          ? { ...profile, followers: updatedFollowers }
          : profile
      )
    );
  };

  return (
    <div className="bg-[#f3f4f6] ms-5 mt-3  w-[75vw] pb-10">
      <div className="pt-10 flex justify-center items-center ps-8">
        <div className="bg-white flex justify-between shadow-xl w-[63vw] h-24 items-center p-10 rounded-lg">
          <div>
            <h1 className="font-bold text-2xl text-blue-600">Friends</h1>
          </div>
          <div className="flex gap-4">
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
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                type="text"
                className="w-[15vw] border-0 border-blue-800 bg-blue-50 text-gray-700 p-3 rounded-lg custom-placeholder"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="bg-blue-50 text-center rounded-lg">
              <svg
                className="w-14 h-12 text-blue-800 dark:text-white p-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[75vw] justify-center gap-9 pt-14 ps-20">
        {dataProfile
          .filter((e) => e.email !== userData.email)
          .map((e) => {
            return (
              <div
                className="bg-white flex justify-center items-center shadow-lg gap-8 w-[20%] h-[32vh] rounded-lg"
                key={e.email}>
                <div className="flex flex-col items-center gap-3">
                  <div>
                    <img
                      src={e.profile}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm">{e.firstName}</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-400 text-xs">@{e.email}1949</h1>
                  </div>
                  <div>
                    <button
                      onClick={() => addFriend(e)}
                      className={`px-4 py-2 rounded-full text-[12px] font-bold 
                                        ${
                                          userData.follows.find(
                                            (ele) => ele.email === e.email
                                          )
                                            ? "bg-white text-blue-600 border-2 border-blue-600"
                                            : "bg-blue-600 text-white"
                                        }`}>
                      {userData.follows.find((ele) => ele.email === e.email)
                        ? "UNFOLLOW"
                        : "FOLLOW"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        {filter.map((user) => (
          <div className="bg-white flex justify-center items-center shadow-lg gap-8 w-[20%] h-[32vh] rounded-lg">
            <div className="flex flex-col items-center gap-3">
              <div>
                <img
                  src={user.picture.large}
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-bold text-sm">{user.name.first}</h1>
              </div>
              <div>
                <h1 className="text-gray-400 text-xs">@{user.name.last}1949</h1>
              </div>
              <div>
                <button
                  onClick={() => addFriends(user.name.first)}
                  className={`px-4 py-2 rounded-full text-[12px] font-bold ${
                    friend[user.name.first]
                      ? "bg-white text-blue-600 border-2 border-blue-600"
                      : "bg-blue-600 text-white"
                  }`}>
                  {friend[user.name.first] ? "UNFOLLOW" : "FOLLOW"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friend_request;
